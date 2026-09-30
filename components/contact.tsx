"use client";

import { useState, FormEvent } from "react";
import {
  SOCIAL_ICONS,
  WhatsAppIcon,
  type SocialIconName,
} from "@/components/socialIcon";

type SocialLink = {
  label?: string;
  href?: string;
  icon: SocialIconName;
};

type ContactProps = {
  phone: string;
  email: string;
  address: string;
  whatsapp?: string;
  socials: SocialLink[];
  form?: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    submitLabel: string;
    successMessage: string;
  };
};

export default function Contact({
  phone,
  email,
  address,
  whatsapp,
  socials = [],
  form,
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus("error");
      setErrorMsg("That email address doesn't look right.");
      return;
    }

    setStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2">

          {/* LEFT: Contact info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text uppercase">
              Get in touch
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed max-w-md">
              Have a project in mind? Send us a message and we&apos;ll get back to you within one business day.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Phone
                </p>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-lg text-text hover:text-primary transition"
                >
                  {phone}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-1 block text-lg text-text hover:text-primary transition"
                >
                  {email}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Address
                </p>
                <p className="mt-1 text-lg text-text">{address}</p>
              </div>
            </div>

            {/* WhatsApp button — brand green stays fixed */}
            {whatsapp && (
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition font-medium"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            )}

            {/* Socials */}
            {socials.length > 0 && (
              <div className="mt-10">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Follow us
                </p>
                <div className="mt-3 flex gap-3">
                  {socials.map((social) => {
                    const Icon = SOCIAL_ICONS[social.icon];
                    if (!Icon) return null;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-text-muted hover:text-text-inverse hover:bg-hero-bg hover:border-hero-bg transition"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Form */}
          {form && (
            <div className="bg-surface rounded-2xl p-8">
              <h3 className="text-xl font-heading font-bold text-text">
                {form.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted">{form.subtitle}</p>

              {status === "sent" ? (
                <div className="mt-8 p-6 rounded-xl bg-accent/10 border border-accent/30 text-text">
                  {form.successMessage}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-text"
                    >
                      {form.fields.name}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-text"
                    >
                      {form.fields.email}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-text"
                    >
                      {form.fields.phone}
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-text"
                    >
                      {form.fields.message}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 bg-primary text-text-inverse rounded-lg font-medium hover:bg-primary-hover transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : form.submitLabel}
                  </button>
                </form>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}