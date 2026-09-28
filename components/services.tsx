
import Image from "next/image";
import Link from "next/link";

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
  services: Service[];
  variant?: "preview" | "full";
};

export default function Services({
  services,
  variant = "preview",
}: ServicesProps) {
  return (
    <section className="py-20 px-6 bg-white ">
      <div className="max-w-4xl mx-auto text-start">

        {/* MAIN TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center uppercase">
          Our Services
        </h2>


        {/* ===================================================== */}
        {/* HOME PAGE / PREVIEW VERSION                           */}
        {/* ===================================================== */}

        {variant === "preview" && (
          <div className="mt-10 grid gap-8 md:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.id}
                className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
              >

                {/* SERVICE TITLE */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                {/* SHORT DESCRIPTION */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

              </div>
            ))}

          </div>
        )}


        {/* ===================================================== */
        /* SERVICES PAGE / FULL VERSION                          */
        /* ===================================================== */}

        {variant === "full" && (
          <div className="mt-16 space-y-20">

            {services.map((service) => (
              <article
                key={service.id}
                id={service.id} /* <-- ADD THIS: Allows linking to /Services#web-development */
                className="border-b border-gray-200 pb-20 last:border-b-0"
              >

                {/* SERVICE HEADER */}
                <div className="max-w-4xl">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* SERVICE CONTENT */}
                {service.content && (
                  <div className="mt-12 max-w-4xl">

                    {service.content.map((content, contentIndex) => (
                      <div
                        key={content.id}
                        id={content.id} /* <-- ADD THIS: Allows linking to /Services#digital-presence */
                        className={`scroll-mt-24 ${contentIndex === 0 ? "" : "mt-12"}`}
                      >

                        {/* SUBTITLE */}
                        {content.subtitle && (
                          <h4 className="text-xl md:text-2xl font-semibold text-gray-900 uppercase">
                            {content.subtitle}
                          </h4>
                        )}

                        {/* PARAGRAPHS */}
                        <div className="mt-4 space-y-4">
                          {content.paragraphs?.map((paragraph, pIndex) => (
                            <p
                              key={pIndex}
                              className="text-gray-600 leading-relaxed"
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
                                className="p-4 rounded-lg bg-gray-50 text-gray-700"
                              >
                                ✓ {feature}
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
                        className="inline-block mt-10 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                      >
                        {service.button.text}
                      </Link>
                    )}

                  </div>
                )}

              </article>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}
