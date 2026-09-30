import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type ServiceContent = {
  id: string;
  subtitle?: string;
  paragraphs?: string[];
  features?: string[];
  image?: string;
};

type Service = {
  id: string;
  title: string;
  description: string;
  content?: ServiceContent[];
  button?: {
    text: string;
    href: string;
  };
};

type ServicesProps = {
  headline: string;
  services: Service[];
  variant?: "preview" | "full";
};

export default function Services({
  headline,
  services,
  variant = "preview",
}: ServicesProps) {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-start">

        {/* MAIN TITLE */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-text text-center uppercase">
          {headline}
        </h2>

        {/* ===================================================== */}
        {/* HOME PAGE / PREVIEW VERSION                           */}
        {/* ===================================================== */}

        {variant === "preview" && (
         <div className="mt-10 grid gap-8 grid-cols-[repeat(auto-fit,minmax(260px,1fr))] max-w-5xl mx-auto">
            {services.map((service) => (
              <Reveal key={service.id} delay={120}>
                <div className="p-6 border border-border rounded-xl bg-background shadow-sm hover:shadow-md transition h-full">
                  <h3 className="text-lg font-heading font-semibold text-text uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* ===================================================== */}
        {/* SERVICES PAGE / FULL VERSION                          */}
        {/* ===================================================== */}

        {variant === "full" && (
          <div className="mt-16 space-y-20">
            {services.map((service) => (
              <Reveal key={service.id} delay={120}>
                <article
                  id={service.id}
                  className="border-b border-border pb-20 last:border-b-0"
                >
                  {/* SERVICE HEADER */}
                  <div className="max-w-4xl">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-text uppercase">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-lg text-text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* SERVICE CONTENT */}
                  {service.content && service.content.length > 0 && (
                    <div className="mt-12 max-w-4xl">
                      {service.content.map((content, contentIndex) => (
                        <div
                          key={content.id}
                          id={content.id}
                          className={`scroll-mt-24 ${
                            contentIndex === 0 ? "" : "mt-12"
                          }`}
                        >
                          {/* SUBTITLE */}
                          {content.subtitle && (
                            <h4 className="text-xl md:text-2xl font-heading font-semibold text-text uppercase">
                              {content.subtitle}
                            </h4>
                          )}

                          {/* PARAGRAPHS */}
                          <div className="mt-4 space-y-4">
                            {content.paragraphs?.map((paragraph, pIndex) => (
                              <p
                                key={pIndex}
                                className="text-text-muted leading-relaxed"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>

                          {/* IMAGE */}
                          {content.image && (
                            <Image
                              src={content.image}
                              alt={content.subtitle || service.title}
                              width={1000}
                              height={600}
                              className="mt-8 w-full rounded-xl object-cover"
                            />
                          )}

                          {/* FEATURES */}
                          {content.features && (
                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                              {content.features.map((feature, fIndex) => (
                                <div
                                  key={fIndex}
                                  className="p-4 rounded-lg bg-surface text-text"
                                >
                                  <span className="text-accent font-bold mr-2">✓</span>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}

                      {/* SERVICE BUTTON */}
                      {service.button && (
                        <Link
                          href={service.button.href}
                          className="inline-block mt-10 px-6 py-3 bg-primary text-text-inverse rounded-lg hover:bg-primary-hover transition font-medium"
                        >
                          {service.button.text}
                        </Link>
                      )}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}