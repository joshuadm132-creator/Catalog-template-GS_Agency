"use client";

import { useState } from "react";
import Link from "next/link";
import { business } from "@/config/business";
import Reveal from "@/components/Reveal";

export default function Footer() {
  // Which section is open on mobile. null = all closed.
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Reveal delay={400}>
          <div className="flex flex-col md:flex-row justify-between gap-8">

            {/* Brand column */}
            <div>
              <h2 className="text-xl font-bold">
                {business.footerData.companyName}
              </h2>
              <p className="mt-3 text-gray-400 max-w-md">
                {business.footerData.description}
              </p>
            </div>

            {/* Link sections */}
            {business.footerData.sections.map((section) => {
              const isOpen = openSection === section.title;

              return (
                <div key={section.title} className="border-t border-gray-800 pt-4 md:border-0 md:pt-0">

                  {/* Mobile: heading is a button */}
                  <button
                    type="button"
                    onClick={() => toggleSection(section.title)}
                    aria-expanded={isOpen}
                    aria-controls={`footer-section-${section.title}`}
                    className="md:hidden flex w-full items-center justify-between text-left text-xl font-bold"
                  >
                    {section.title}
                    <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>

                  {/* Desktop: heading is a plain h2 */}
                  <h2 className="hidden md:block text-xl font-bold">
                    {section.title}
                  </h2>

                  {/* Links: visible on desktop, conditionally on mobile */}
                  <div
                    id={`footer-section-${section.title}`}
                    className={`
                      flex-col gap-4 mt-3
                      ${isOpen ? "flex" : "hidden"}
                      md:flex
                    `}
                  >
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                        >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                </div>
              );
            })}

            {/* Contact block — mobile accordion too */}
            <div className="border-t border-gray-800 pt-4 md:border-0 md:pt-0">
              <button
                type="button"
                onClick={() => toggleSection("Contact")}
                aria-expanded={openSection === "Contact"}
                aria-controls="footer-section-Contact"
                className="md:hidden flex w-full items-center justify-between text-left text-xl font-bold"
              >
                Contact
                <span aria-hidden="true">{openSection === "Contact" ? "−" : "+"}</span>
              </button>

              <h2 className="hidden md:block text-xl font-bold">
                Contact
              </h2>

              <div
                id="footer-section-Contact"
                className={`
                  flex-col gap-2 mt-3 text-gray-400
                  ${openSection === "Contact" ? "flex" : "hidden"}
                  md:flex
                `}
              >
                <p>{business.contact.phone}</p>
                <p>{business.contact.email}</p>
                <p>{business.location}</p>
              </div>
            </div>

          </div>

          <div className="mt-10 pt-6 border-t border-gray-700 text-sm text-gray-400">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </div>
        </Reveal>
      </div>
    </footer>
  );
}