"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-tight transition-all duration-300";
  const variants = {
    primary: "bg-yellow text-navy hover:bg-yellow-hover active:scale-[0.98]",
    outline:
      "border-2 border-navy text-navy hover:bg-navy hover:text-white active:scale-[0.98]",
  };

  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ y: 0 }}>
      <Link href={href} className={`${base} ${variants[variant]}`}>
        {children}
      </Link>
    </motion.div>
  );
}
