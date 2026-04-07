import type { Metadata } from "next";
import { SectionReveal } from "@/components/section-reveal";
import { ServiceCard } from "@/components/service-card";
import { CTAButton } from "@/components/cta-button";

export const metadata: Metadata = {
  title: "Services | CREAL Marketing Inc.",
  description:
    "AI-powered marketing, lead generation, and startup growth services by CREAL Marketing.",
};

const services = [
  {
    title: "AI-Powered Marketing",
    description:
      "We build marketing systems that learn and adapt. From campaign automation to predictive audience targeting, AI handles the heavy lifting so your team can focus on strategy.",
    details: [
      "AI-driven campaign automation and optimization",
      "Predictive analytics for audience targeting",
      "Automated content generation and A/B testing",
      "Marketing data pipeline architecture",
      "Custom AI model training for your business data",
    ],
    image: "/images/generated/service-ai.png",
  },
  {
    title: "Lead Generation",
    description:
      "Scalable pipelines that fill your calendar with qualified prospects. We have built lead systems for Canada's largest real estate developers and adapted those playbooks for B2B SaaS.",
    details: [
      "B2B and B2C lead pipeline design",
      "Cold email and LinkedIn outreach automation",
      "High-converting landing page development",
      "CRM setup and lead scoring workflows",
      "Performance tracking and ROI reporting",
    ],
    image: "/images/generated/service-leadgen.png",
  },
  {
    title: "Growth for Startups",
    description:
      "From zero to traction. We have helped YC-backed startups find product-market fit and build their first growth loops. Real operator experience, not consulting theory.",
    details: [
      "Go-to-market strategy and execution",
      "Product-market fit validation frameworks",
      "B2B SaaS growth playbooks (VisaFlo, Sunday)",
      "Early-stage customer discovery and outreach",
      "Marketing stack setup on a startup budget",
    ],
    image: "/images/generated/service-startup.png",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-gap pb-0">
        <div className="container-page">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-warm-gray mb-3">
              Services
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-none text-navy max-w-[20ch]">
              Built to grow your business.
            </h1>
            <p className="mt-4 text-lg text-warm-gray leading-relaxed max-w-[55ch]">
              Every engagement is different. We combine AI, automation, and
              hands-on experience to build the right system for your stage and
              goals.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20">
            <div className="flex flex-col gap-16">
              {services.slice(0, 2).map((s, i) => (
                <SectionReveal key={s.title} delay={i * 0.1}>
                  <ServiceCard {...s} />
                </SectionReveal>
              ))}
            </div>
            <div className="lg:mt-32">
              <SectionReveal delay={0.2}>
                <ServiceCard {...services[2]} />
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white section-gap">
        <div className="container-page text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-navy">
              Not sure which service fits?
            </h2>
            <p className="mt-3 text-warm-gray text-lg">
              Tell us about your business. We will figure out the right approach
              together.
            </p>
            <div className="mt-8">
              <CTAButton href="/contact">Get in Touch</CTAButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
