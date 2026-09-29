// components/TeamRotator.tsx
import Link from "next/link";
import Image from "next/image";
import FadeRotator from "@/components/FadeRotator";

type Content = {
  id: string;
  subtitle?: string;
  paragraphs: string[];
  features?: string[];
  image?: string;
  button?: { text: string; href: string };
};

type TeamRotatorProps = {
  title: string;
  contents: Content[];
};

export default function TeamRotator({ title, contents }: TeamRotatorProps) {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase text-center">
          {title}
        </h2>

        <div className="mt-16">
          <FadeRotator
            interval={8000}
            minHeight={520}
            items={contents.map((member) => (
              <div
                key={member.id}
                id={member.id}
                className="grid gap-10 md:grid-cols-[300px_1fr] md:items-start"
              >
                {/* Photo column */}
                <div className="mx-auto md:mx-0">
                  <div className="w-48 h-48 md:w-full md:h-64 rounded-2xl bg-gray-200 overflow-hidden">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.subtitle || "Team member"}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl font-bold">
                        {member.subtitle?.charAt(0) || "?"}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bio column */}
                <div>
                  {member.subtitle && (
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {member.subtitle}
                    </h3>
                  )}

                  {member.paragraphs.map((p, i) => (
                    <p key={i} className="mt-4 text-gray-600 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {member.button && (
                    <Link
                      href={member.button.href}
                      className="inline-block mt-6 text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-600 transition"
                    >
                      {member.button.text} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          />
        </div>
      </div>
    </section>
  );
}