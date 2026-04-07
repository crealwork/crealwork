"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import Image from "next/image";

export function ServiceCard({
  title,
  description,
  details,
  image,
}: {
  title: string;
  description: string;
  details: string[];
  image: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group">
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-navy/5">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy">
        {title}
      </h3>
      <p className="mt-2 text-warm-gray leading-relaxed">{description}</p>

      <button
        onClick={() => setOpen(!open)}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-yellow transition-colors"
        aria-expanded={open}
      >
        {open ? "Show less" : "Show details"}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <CaretDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mt-4 flex flex-col gap-2"
          >
            {details.map((d) => (
              <li
                key={d}
                className="text-sm text-warm-gray pl-4 border-l-2 border-yellow"
              >
                {d}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
