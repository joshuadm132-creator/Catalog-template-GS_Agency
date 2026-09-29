// components/AboutContent.tsx
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type Content = {
  id: string;
  subtitle?: string;
  paragraphs: string[];
  features?: string[];
  image?: string;
  button?: { text: string; href: string };
};

type AboutContentProps = {
  title: string;
  contents: Content[];
};

export default function AboutContent({ title, contents }: AboutContentProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase text-center">
            {title}
          </h2>
        </Reveal>

        <div className="mt-16 space-y-24">
          {contents.map((content, index) => (
            <Reveal key={content.id} delay={index * 150}>
              <div
                id={content.id}
                className={`grid gap-10 md:grid-cols-2 md:items-center ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text column */}
                <div>
                  {content.subtitle && (
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      {content.subtitle}
                    </p>
                  )}

                  {content.paragraphs.map((p, i) => (
                    <p key={i} className="mt-4 text-gray-600 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {content.features && (
                    <ul className="mt-6 space-y-2">
                      {content.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {content.button && (
                    <Link
                      href={content.button.href}
                      className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                    >
                      {content.button.text}
                    </Link>
                  )}
                </div>

                {/* Image column — placeholder for now */}
                <div className="aspect-[4/3] rounded-2xl bg-gray-100 overflow-hidden">
                  {content.image ? (
                    <Image
                      src={content.image}
                      alt={content.subtitle || "About us"}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
                      image coming soon
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}