import type { Metadata } from "next";
import Image from "next/image";
import { SectionReveal } from "@/components/section-reveal";
import { CTAButton } from "@/components/cta-button";

export const metadata: Metadata = {
  title: "About | CREAL Marketing Inc.",
  description:
    "Meet Dan Jeong, PMP — 10+ years in lead generation, AI marketing, and B2B SaaS growth.",
};

const timeline = [
  {
    period: "2014 — 2021",
    title: "Lead Generation at Scale",
    description:
      "Built lead systems for Canada's largest real estate developers and general contractors. Concord Pacific, BCLDB, and dozens of projects across Vancouver.",
  },
  {
    period: "2021 — 2024",
    title: "B2B SaaS Growth",
    description:
      "Fractional CMO at VisaFlo, a Korean VC-backed immigration startup. Built the marketing engine from scratch. Moved into product-led growth and automation.",
  },
  {
    period: "2024 — Present",
    title: "AI + Automation",
    description:
      "Co-founded Sunday (YC W22 network, 2x exit co-founder). Now building CREAL Marketing to bring AI-powered marketing systems to SMBs and startups.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-gap">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            <SectionReveal>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-off-white">
                <Image
                  src="/images/headshot.png"
                  alt="Dan Jeong, founder of CREAL Marketing"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <p className="text-sm font-semibold uppercase tracking-wider text-warm-gray mb-3">
                About
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-none text-navy">
                Dan Jeong, PMP
              </h1>
              <p className="mt-2 text-lg text-yellow font-semibold">
                Founder, CREAL Marketing Inc.
              </p>
              <div className="mt-6 flex flex-col gap-4 text-warm-gray leading-relaxed max-w-[55ch]">
                <p>
                  I have spent the last decade building marketing systems that
                  generate leads at scale. I started in real estate development
                  marketing, working with some of Canada's largest developers
                  and general contractors.
                </p>
                <p>
                  That experience taught me how to build pipelines. AI taught me
                  how to make them run themselves.
                </p>
                <p>
                  Today I work with SMBs and startups to combine AI, automation,
                  and proven lead generation tactics into systems that grow
                  revenue without growing headcount.
                </p>
              </div>
              <div className="mt-8">
                <CTAButton href="/contact">Work With Me</CTAButton>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="bg-off-white section-gap">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-navy">
                Why CREAL?
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-warm-gray leading-relaxed max-w-[55ch]">
                <p>
                  Most marketing agencies sell hours. We build systems. The
                  difference is that a system keeps working after the
                  engagement ends.
                </p>
                <p>
                  CREAL exists because marketing should not depend on how many
                  people you can hire. With the right AI tools and automation,
                  a two-person startup can run campaigns that look like they
                  came from a 50-person team.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-navy/5">
                <Image
                  src="/images/generated/decorative-1.png"
                  alt="Abstract representation of connected marketing systems"
                  fill
                  className="object-cover"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-navy mb-12">
              The path here.
            </h2>
          </SectionReveal>

          <div className="flex flex-col gap-0">
            {timeline.map((t, i) => (
              <SectionReveal key={t.period} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-4 lg:gap-12 py-8 border-t border-warm-gray-light/50">
                  <div className="text-sm font-semibold text-warm-gray tracking-wider">
                    {t.period}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-navy">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-warm-gray leading-relaxed max-w-[55ch]">
                      {t.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
