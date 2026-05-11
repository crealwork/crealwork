import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "Terms of Service | CREAL Marketing Inc.",
  description:
    "Terms that govern your use of crealwork.com and the relationship between you and CREAL Marketing Inc.",
  alternates: { canonical: "https://crealwork.com/terms" },
};

const LAST_UPDATED = "May 10, 2026";

export default function TermsPage() {
  return (
    <>
      <section className="section-gap">
        <div className="container-page">
          <div className="max-w-[68ch]">
            <SectionReveal>
              <p className="text-sm font-semibold uppercase tracking-wider text-warm-gray mb-3">
                Legal
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-none text-navy">
                Terms of Service
              </h1>
              <p className="mt-3 text-sm text-warm-gray">
                Last updated: {LAST_UPDATED}
              </p>

              <div className="mt-8 flex flex-col gap-5 text-warm-gray leading-relaxed">
                <p>
                  These terms apply when you visit crealwork.com or contact
                  CREAL Marketing Inc. (&ldquo;CREAL&rdquo;, &ldquo;we&rdquo;,
                  &ldquo;us&rdquo;) through the site. They do not replace any
                  separate service agreement we sign with paying clients.
                </p>
                <p>
                  By using the site, you agree to these terms. If you
                  don&rsquo;t agree, please stop using the site.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="bg-off-white section-gap">
        <div className="container-page">
          <div className="max-w-[68ch] flex flex-col gap-12">
            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                1. About this site
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  crealwork.com is an informational website for CREAL
                  Marketing Inc., a marketing agency incorporated in British
                  Columbia, Canada. The site exists so prospective clients
                  can learn what we do and get in touch.
                </p>
                <p>
                  Nothing on this site creates a client relationship. A
                  client relationship is formed only after both parties sign
                  a written service agreement.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                2. Permitted use
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  You may use this site for your personal and professional
                  information needs. You agree not to:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                  <li>
                    Reverse-engineer, scrape, or systematically copy site
                    content for republication.
                  </li>
                  <li>
                    Use the contact form to send spam, unlawful content, or
                    automated submissions.
                  </li>
                  <li>
                    Attempt to probe, attack, or interfere with the site or
                    its hosting infrastructure.
                  </li>
                  <li>
                    Impersonate another person or misrepresent your
                    affiliation with any company.
                  </li>
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                3. Intellectual property
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  The CREAL name, logo, design, copy, and original images on
                  this site are the property of CREAL Marketing Inc. You may
                  quote short excerpts for review or commentary with
                  attribution. You may not copy the site as a template.
                </p>
                <p>
                  Third-party trademarks mentioned on the site (e.g. Google,
                  Vercel, client logos) belong to their respective owners.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                4. Submissions through the contact form
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  When you submit a message through the contact form or
                  email us, you give us permission to read it, reply, and
                  store it for our records, in line with our{" "}
                  <Link
                    href="/privacy"
                    className="text-navy underline hover:text-yellow transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  . Please don&rsquo;t send confidential information through
                  the contact form. If you need to share something
                  sensitive, ask for an encrypted channel first.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                5. Disclaimer
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  Content on this site is provided for general information
                  only. It is not legal, tax, financial, or professional
                  advice. We try to keep the site accurate and current, but
                  we do not warrant that it is. The site is provided
                  &ldquo;as is&rdquo; and &ldquo;as available&rdquo;.
                </p>
                <p>
                  Case studies and examples describe past results. Marketing
                  results depend on many factors and we do not guarantee any
                  particular outcome.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                6. Limitation of liability
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  To the maximum extent permitted by law, CREAL Marketing
                  Inc. is not liable for any indirect, incidental, special,
                  or consequential damages arising from your use of the
                  site. Our total liability for any claim related to the
                  site, if any, will not exceed CAD $100.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                7. External links
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  Our site may link to third-party websites and services.
                  We don&rsquo;t control those sites and don&rsquo;t endorse
                  their content. Visiting them is at your own risk.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                8. Governing law
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  These terms are governed by the laws of the Province of
                  British Columbia and the federal laws of Canada applicable
                  there. Any dispute will be heard in the courts of British
                  Columbia.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                9. Changes
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  We may update these terms from time to time. The
                  &ldquo;Last updated&rdquo; date at the top reflects the
                  most recent change. Continuing to use the site after a
                  change means you accept the new terms.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                10. Contact
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  CREAL Marketing Inc.
                  <br />
                  Vancouver, British Columbia, Canada
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:dan@crealwork.com"
                    className="text-navy underline hover:text-yellow transition-colors"
                  >
                    dan@crealwork.com
                  </a>
                </p>
                <p className="text-sm">
                  See also our{" "}
                  <Link
                    href="/privacy"
                    className="text-navy underline hover:text-yellow transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
