"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperPlaneTilt, CheckCircle } from "@phosphor-icons/react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const next: Partial<FormData> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email";
    }
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    console.log("Form submitted:", form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <CheckCircle size={48} className="text-yellow mx-auto" weight="fill" />
        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-navy">
          Message sent.
        </h3>
        <p className="mt-2 text-warm-gray">
          We will get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl border border-warm-gray-light bg-white text-navy text-sm placeholder:text-warm-gray/60 transition-all duration-200 focus:border-yellow focus:ring-2 focus:ring-yellow/20 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">
          Name
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`${inputBase} ${errors.name ? "border-coral" : ""}`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-coral">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">
          Email
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={`${inputBase} ${errors.email ? "border-coral" : ""}`}
          placeholder="you@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-coral">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">
          Company
          <span className="text-warm-gray font-normal ml-1">(optional)</span>
        </label>
        <input
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className={inputBase}
          placeholder="Your company name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-navy mb-1.5">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          className={`${inputBase} resize-none ${errors.message ? "border-coral" : ""}`}
          placeholder="Tell us about your project or goals..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-coral">{errors.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-yellow text-navy text-sm font-semibold tracking-tight hover:bg-yellow-hover transition-colors"
      >
        Send Message
        <PaperPlaneTilt size={16} weight="bold" />
      </motion.button>
    </form>
  );
}
