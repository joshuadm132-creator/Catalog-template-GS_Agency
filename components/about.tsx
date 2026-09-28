import Image from "next/image";
import Link from "next/link";
type Content = {
  id: string;
  subtitle?: string;
  paragraphs: string[];
  features?: string[];
  image?: string;
  button?: {
    text: string;
    href: string;
  };
};

type AboutProps = {
  title: string;
  contents: Content[];
};

export default function About({ title, contents }: AboutProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-start">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
          {title}
        </h2>

        {contents.map((contant) => (
          <div key={contant.id} className="mt-8" id={contant.id}>
            {contant.subtitle && (
              <h3  className="mt-4 text-lg text-gray-800 uppercase">
                {contant.subtitle}
              </h3>
            )}

            {contant.paragraphs && contant.paragraphs.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="mt-4 text-gray-600 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {contant.image && (
              <Image
                src={contant.image}
                alt={contant.subtitle || "About us"}
                className="mt-8 w-full rounded-xl object-cover"
              />
            )}

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {contant.features && contant.features.map((feature, fIndex) => (
                <div
                  key={fIndex}
                  className="p-4 rounded-lg bg-gray-50 text-gray-700"
                >
                  ✓ {feature}
                </div>
              ))}
            </div>

              {contant.button && (
                <Link
                  href={contant.button.href}
                  className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  {contant.button.text}
                </Link>
              )}

          </div>
        ))}
      </div>
    </section>
  );
}