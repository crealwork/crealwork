import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { CTAButton } from "@/components/cta-button";
import { SectionReveal } from "@/components/section-reveal";
import { MetricsStrip } from "@/components/metrics-strip";

const services = [
  {
    title: "AI-Powered Marketing",
    description:
      "Campaign automation, AI-driven content, and predictive analytics that turn data into decisions.",
    image: "/images/generated/service-ai.png",
    href: "/services",
  },
  {
    title: "Lead Generation",
    description:
      "B2B and B2C pipelines built for scale. Cold outreach, landing pages, and conversion systems that deliver.",
    image: "/images/generated/service-leadgen.png",
    href: "/services",
  },
  {
    title: "Growth for Startups",
    description:
      "GTM strategy, product-market fit validation, and B2B SaaS growth playbooks from someone who has done it.",
    image: "/images/generated/service-startup.png",
    href: "/services",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: "100dvh", display: "flex", alignItems: "center" }}>
        <div className="container-page" style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
          <div className="hero-grid">
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-warm-gray)", marginBottom: "1.5rem" }}>
                CREAL Marketing Inc.
              </p>
              <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.95, color: "var(--color-navy)" }}>
                Marketing that
                <br />
                <span style={{ color: "var(--color-yellow)" }}>thinks for itself.</span>
              </h1>
              <p style={{ marginTop: "1.5rem", fontSize: "1.125rem", color: "var(--color-warm-gray)", lineHeight: 1.7 }}>
                We combine AI, automation, and ten years of lead generation
                experience to build marketing systems that grow your business
                while you focus on what matters.
              </p>
              <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <CTAButton href="/contact">Get in Touch</CTAButton>
                <CTAButton href="/services" variant="outline">
                  Our Services
                </CTAButton>
              </div>
            </div>

            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(26,42,79,0.2)" }}>
              <Image
                src="/images/generated/hero.png"
                alt="Abstract visualization of AI-powered marketing systems"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-gap" style={{ backgroundColor: "var(--color-off-white)" }}>
        <div className="container-page">
          <MetricsStrip />
        </div>
      </section>

      {/* Services */}
      <section className="section-gap">
        <div className="container-page">
          <SectionReveal>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-warm-gray)", marginBottom: "0.75rem" }}>
              What We Do
            </p>
            <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--color-navy)" }}>
              Three ways we drive growth.
            </h2>
          </SectionReveal>

          <div style={{ marginTop: "4rem", display: "flex", flexDirection: "column", gap: "5rem" }}>
            {services.map((s, i) => (
              <SectionReveal key={s.title} delay={0.1}>
                <div className={`service-zigzag${i % 2 === 1 ? " reverse" : ""}`}>
                  <div className="service-image" style={{ position: "relative", aspectRatio: "16/10", borderRadius: "1rem", overflow: "hidden", backgroundColor: "rgba(26,42,79,0.04)" }}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="service-text">
                    <h3 className="font-display" style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--color-navy)" }}>
                      {s.title}
                    </h3>
                    <p style={{ marginTop: "0.75rem", color: "var(--color-warm-gray)", lineHeight: 1.7 }}>
                      {s.description}
                    </p>
                    <Link
                      href={s.href}
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-navy)" }}
                    >
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-gap" style={{ backgroundColor: "var(--color-navy)" }}>
        <div className="container-page" style={{ textAlign: "center" }}>
          <SectionReveal>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#ffffff" }}>
              Ready to automate your growth?
            </h2>
            <p style={{ marginTop: "1.25rem", fontSize: "1.125rem", color: "var(--color-warm-gray-light)", maxWidth: "50ch", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
              Let us show you how AI and automation can transform your marketing
              from a cost center into a growth engine.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <CTAButton href="/contact">Get in Touch</CTAButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
