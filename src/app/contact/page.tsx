import type { Metadata } from "next";
import Image from "next/image";
import {
  Envelope,
  MapPin,
  InstagramLogo,
  ThreadsLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { SectionReveal } from "@/components/section-reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | CREAL Marketing Inc.",
  description:
    "Get in touch with CREAL Marketing. Based in Vancouver, BC.",
};

const contactInfo = [
  { icon: Envelope, label: "Email", value: "dan@crealwork.com", href: "mailto:dan@crealwork.com" },
  { icon: MapPin, label: "Location", value: "Vancouver, BC", href: null },
];

const socials = [
  { icon: InstagramLogo, label: "Instagram", value: "@crealwork", href: "https://instagram.com/crealwork" },
  { icon: ThreadsLogo, label: "Threads", value: "@do.what.they.wont", href: "https://threads.net/@do.what.they.wont" },
  { icon: LinkedinLogo, label: "LinkedIn", value: "Dan Jeong", href: "https://linkedin.com/in/danjeong" },
];

export default function ContactPage() {
  return (
    <section className="section-gap">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-warm-gray mb-3">
              Contact
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-none text-navy">
              Let's talk.
            </h1>
            <p className="mt-4 text-warm-gray leading-relaxed max-w-[40ch]">
              Whether you have a specific project in mind or just want to
              explore what AI can do for your marketing, we are happy to chat.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-off-white">
                    <c.icon size={20} className="text-navy" />
                  </div>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-navy hover:text-yellow transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-sm text-navy">{c.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-warm-gray-light/50">
              <p className="text-xs font-semibold uppercase tracking-wider text-warm-gray mb-4">
                Follow Along
              </p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-navy hover:text-yellow transition-colors"
                  >
                    <s.icon size={18} />
                    {s.value}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 relative aspect-[16/9] rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="/images/generated/contact-bg.png"
                alt="Abstract flowing design"
                fill
                className="object-cover"
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="bg-off-white rounded-3xl p-8 lg:p-10">
              <h2 className="font-display text-xl font-bold tracking-tight text-navy mb-6">
                Send a message
              </h2>
              <ContactForm />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
