import { GoogleGenAI } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

const OUTPUT_DIR = path.join(__dirname, "../public/images/generated");

const PROMPTS: Record<string, string> = {
  "hero": "Abstract minimalist artwork representing the fusion of artificial intelligence and modern marketing. Flowing geometric shapes in navy blue (#1A2A4F) and warm gold (#FFCC4E) on a clean white background. Subtle data flow lines and neural network patterns. Professional, sophisticated, editorial quality. No text, no logos, no people.",
  "service-ai": "Abstract visualization of AI-powered analytics. Geometric crystal formations with interconnected light paths in navy blue and gold tones on white. Clean, minimal, high-end editorial style. No text, no logos, no people.",
  "service-leadgen": "Abstract representation of lead generation and growth pipelines. Organic flowing lines converging into structured geometric patterns. Navy blue (#1A2A4F) with gold (#FFCC4E) accent highlights on white background. Minimal, sophisticated. No text, no logos, no people.",
  "service-startup": "Abstract artwork symbolizing startup growth trajectory. Ascending geometric shapes with dynamic motion blur in navy blue and warm gold on white. Clean, minimal, editorial quality. No text, no logos, no people.",
  "about-bg": "Subtle abstract background pattern with soft geometric shapes in light warm gray and faint navy blue. Elegant, understated, professional. Suitable as a background texture. No text, no logos, no people.",
  "contact-bg": "Minimal abstract artwork with soft flowing curves in light gold and warm gray on white. Calming, inviting, professional. No text, no logos, no people.",
  "decorative-1": "Abstract geometric composition inspired by data networks. Interconnected nodes and flowing lines in navy blue with gold highlights on white. Clean, editorial, high-end. No text, no logos, no people.",
  "decorative-2": "Minimal abstract artwork with overlapping translucent geometric planes in navy blue and subtle coral (#D77A61) accents on white. Sophisticated, modern. No text, no logos, no people.",
};

async function generateImages() {
  const apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) {
    console.error("GOOGLE_AI_API_KEY is not set");
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey });

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const [name, prompt] of Object.entries(PROMPTS)) {
    const outputPath = path.join(OUTPUT_DIR, `${name}.png`);

    if (fs.existsSync(outputPath)) {
      console.log(`Skipping ${name} (already exists)`);
      continue;
    }

    console.log(`Generating: ${name}...`);

    try {
      // Try Imagen 4.0 first
      const response = await ai.models.generateImages({
        model: "imagen-4.0-fast-generate-001",
        prompt,
        config: {
          numberOfImages: 1,
        },
      });

      if (response.generatedImages && response.generatedImages[0]?.image?.imageBytes) {
        const buffer = Buffer.from(response.generatedImages[0].image.imageBytes, "base64");
        fs.writeFileSync(outputPath, buffer);
        console.log(`Saved: ${outputPath}`);
      } else {
        console.error(`No image data for ${name}`);
      }
    } catch (error: any) {
      console.error(`Imagen failed for ${name}: ${error.message || error}`);
      console.log(`Trying Gemini fallback for ${name}...`);

      try {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash-image",
          contents: prompt,
          config: {
            responseModalities: ["IMAGE", "TEXT"],
          },
        });

        const parts = response.candidates?.[0]?.content?.parts;
        if (parts) {
          for (const part of parts) {
            if ((part as any).inlineData) {
              const buffer = Buffer.from((part as any).inlineData.data, "base64");
              fs.writeFileSync(outputPath, buffer);
              console.log(`Saved (Gemini fallback): ${outputPath}`);
              break;
            }
          }
        } else {
          console.error(`No image data from Gemini fallback for ${name}`);
        }
      } catch (fallbackError: any) {
        console.error(`Gemini fallback also failed for ${name}: ${fallbackError.message || fallbackError}`);

        // Try one more model
        try {
          const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-image-preview",
            contents: prompt,
            config: {
              responseModalities: ["IMAGE", "TEXT"],
            },
          });

          const parts = response.candidates?.[0]?.content?.parts;
          if (parts) {
            for (const part of parts) {
              if ((part as any).inlineData) {
                const buffer = Buffer.from((part as any).inlineData.data, "base64");
                fs.writeFileSync(outputPath, buffer);
                console.log(`Saved (Gemini 3.1 fallback): ${outputPath}`);
                break;
              }
            }
          } else {
            console.error(`All models failed for ${name}`);
          }
        } catch (lastError: any) {
          console.error(`All models failed for ${name}: ${lastError.message || lastError}`);
        }
      }
    }

    // Rate limit pause
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  console.log("Done generating images.");
}

generateImages();
