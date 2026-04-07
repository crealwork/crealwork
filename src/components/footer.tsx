import Link from "next/link";
import { InstagramLogo, ThreadsLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

const socialLinks = [
  { href: "https://instagram.com/crealwork", icon: InstagramLogo, label: "Instagram" },
  { href: "https://threads.net/@do.what.they.wont", icon: ThreadsLogo, label: "Threads" },
  { href: "https://linkedin.com/in/danjeong", icon: LinkedinLogo, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-off-white border-t border-warm-gray-light/50">
      <div className="container-page" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">
          <div>
            <Link href="/" className="font-display text-xl font-bold tracking-tighter text-navy">
              CREAL
            </Link>
            <p className="mt-4 text-warm-gray text-sm leading-relaxed max-w-[40ch]">
              AI-powered marketing and automation for businesses that want to grow smarter, not harder.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-warm-gray mb-4">Pages</h4>
            <div className="flex flex-col gap-2">
              <Link href="/services" className="text-sm text-navy hover:text-yellow transition-colors">Services</Link>
              <Link href="/about" className="text-sm text-navy hover:text-yellow transition-colors">About</Link>
              <Link href="/contact" className="text-sm text-navy hover:text-yellow transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-warm-gray mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-lg text-navy hover:bg-navy hover:text-white transition-all duration-200"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-gray-light/50 text-xs text-warm-gray">
          {new Date().getFullYear()} CREAL Marketing Inc. Vancouver, BC.
        </div>
      </div>
    </footer>
  );
}
