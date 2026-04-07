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
      {/* Hero — Asymmetric split (text left, image right) */}
      <section className="section-gap">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center min-h-[80dvh]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-warm-gray mb-4">
                CREAL Marketing Inc.
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none text-navy">
                Marketing that
                <br />
                <span className="text-yellow">thinks for itself.</span>
              </h1>
              <p className="mt-6 text-lg text-warm-gray leading-relaxed max-w-[50ch]">
                We combine AI, automation, and ten years of lead generation
                experience to build marketing systems that grow your business
                while you focus on what matters.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href="/contact">Get in Touch</CTAButton>
                <CTAButton href="/services" variant="outline">
                  Our Services
                </CTAButton>
              </div>
            </div>

            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden">
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
      <section className="bg-off-white section-gap">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <MetricsStrip />
        </div>
      </section>

      {/* Services — Zig-zag layout */}
      <section className="section-gap">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-warm-gray mb-3">
              What We Do
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-navy max-w-[20ch]">
              Three ways we drive growth.
            </h2>
          </SectionReveal>

          <div className="mt-16 flex flex-col gap-20">
            {services.map((s, i) => (
              <SectionReveal key={s.title} delay={0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
                  style={i % 2 === 1 ? { direction: "rtl" } : undefined}
                >
                  <div
                    className="relative aspect-[16/10] rounded-2xl overflow-hidden"
                    style={{ direction: "ltr" }}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div style={{ direction: "ltr" }}>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-warm-gray leading-relaxed max-w-[45ch]">
                      {s.description}
                    </p>
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-navy hover:text-yellow transition-colors"
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
      <section className="bg-navy section-gap">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-white">
              Ready to automate your growth?
            </h2>
            <p className="mt-4 text-warm-gray-light text-lg max-w-[50ch] mx-auto">
              Let us show you how AI and automation can transform your marketing
              from a cost center into a growth engine.
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
