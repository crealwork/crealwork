import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | CREAL Marketing Inc.",
  description:
    "How CREAL Marketing Inc. collects, uses, and protects the personal information of website visitors and clients.",
  alternates: { canonical: "https://crealwork.com/privacy" },
};

const LAST_UPDATED = "May 10, 2026";

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="mt-3 text-sm text-warm-gray">
                Last updated: {LAST_UPDATED}
              </p>

              <div className="mt-8 flex flex-col gap-5 text-warm-gray leading-relaxed">
                <p>
                  CREAL Marketing Inc. (&ldquo;CREAL&rdquo;, &ldquo;we&rdquo;,
                  &ldquo;us&rdquo;) is a marketing agency based in Vancouver,
                  British Columbia. This policy explains what personal
                  information we collect when you visit crealwork.com or get
                  in touch with us, why we collect it, and what your rights
                  are under Canadian privacy law.
                </p>
                <p>
                  We treat your information the way we would want ours treated.
                  No selling, no surprises, no fine print designed to be
                  ignored.
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
                1. Who this policy covers
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  This policy applies to visitors of crealwork.com and to
                  prospects who contact us through the website. Our work with
                  paying clients is governed by a separate service agreement
                  that includes its own data-handling terms.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                2. What we collect
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  <strong className="text-navy">Information you give us.</strong>{" "}
                  When you submit the contact form, we collect your name, email
                  address, message, and (if you choose to provide it) your
                  company name. If you email us directly, we receive whatever
                  you put in that email.
                </p>
                <p>
                  <strong className="text-navy">Information collected automatically.</strong>{" "}
                  Our hosting provider (Vercel) logs standard request metadata
                  for security and operations: IP address, user agent, request
                  path, and timestamp. We do not currently run third-party
                  analytics or advertising tracking on this site. If we add
                  analytics in the future, we&rsquo;ll update this policy
                  before it goes live.
                </p>
                <p>
                  We do not collect payment information through this website.
                  We do not run any tracking pixel for ad retargeting.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                3. Why we collect it
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  We use what you submit through the contact form to reply to
                  your inquiry and, if it leads to an engagement, to set up a
                  client relationship. We use automatic logs and analytics to
                  keep the site secure, fix bugs, and improve content.
                </p>
                <p>
                  We will not use your contact information to send marketing
                  emails unless you have asked us to.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                4. Who we share it with
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  We do not sell personal information. We share information
                  only with service providers that help us operate the site
                  and our business:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                  <li>
                    <strong className="text-navy">Vercel</strong> — website
                    hosting and request logging.
                  </li>
                  <li>
                    <strong className="text-navy">Google Workspace</strong> —
                    our business email inbox for replying to contact-form
                    messages.
                  </li>
                </ul>
                <p>
                  These providers may process data outside Canada (typically
                  the United States). We use them under their published terms
                  and rely on their security commitments. We may also share
                  information when required by law or to protect our rights.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                5. Cookies
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  The site does not set any tracking cookies. Any cookies you
                  see in your browser from this domain are strictly necessary
                  for the site to load (e.g. Vercel infrastructure cookies).
                  You can block all cookies in your browser settings without
                  breaking anything on this site.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                6. How long we keep it
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  Inquiries that do not turn into a client engagement are kept
                  for up to 24 months from last contact, then deleted. Client
                  records are kept for as long as needed to deliver our
                  services and meet legal and accounting obligations
                  (typically seven years for tax records under Canadian law).
                  Server and analytics logs follow our providers&rsquo;
                  default retention windows.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                7. Your rights under Canadian privacy law
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  Under the Personal Information Protection and Electronic
                  Documents Act (PIPEDA) and BC&rsquo;s Personal Information
                  Protection Act (PIPA), you have the right to:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                  <li>
                    Ask what personal information we hold about you and request
                    a copy.
                  </li>
                  <li>Ask us to correct information that is inaccurate.</li>
                  <li>
                    Withdraw consent for any future use of your information.
                  </li>
                  <li>
                    Ask us to delete information we no longer need to keep.
                  </li>
                  <li>
                    File a complaint with the Office of the Privacy
                    Commissioner of Canada at{" "}
                    <a
                      href="https://www.priv.gc.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy underline hover:text-yellow transition-colors"
                    >
                      priv.gc.ca
                    </a>
                    .
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, email{" "}
                  <a
                    href="mailto:dan@crealwork.com"
                    className="text-navy underline hover:text-yellow transition-colors"
                  >
                    dan@crealwork.com
                  </a>
                  . We respond within 30 days.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                8. Security
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  We use commercially reasonable security: encrypted transport
                  (HTTPS), access-controlled email and storage, and password
                  managers with two-factor authentication for any account that
                  touches client data. No system is perfectly secure, and we
                  recommend you do not send anything highly sensitive through
                  a contact form.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                9. Children
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  crealwork.com is a business-to-business site and is not
                  directed at children under 13. We do not knowingly collect
                  information from children. If you believe we have, contact
                  us and we will delete it.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                10. Changes to this policy
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-warm-gray leading-relaxed">
                <p>
                  When we change this policy in a meaningful way, we update
                  the &ldquo;Last updated&rdquo; date at the top and, for
                  material changes, post a notice on the homepage for at
                  least 30 days.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-navy">
                11. Contact
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
                    href="/terms"
                    className="text-navy underline hover:text-yellow transition-colors"
                  >
                    Terms of Service
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
