type contentProps = {
  subtitle?: string;
  paragraphs: string[];
  features?: string[];
};

type AboutProps = {
  title: string;
  contents: contentProps[];
};

export default function About({ title, contents }: AboutProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-start">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
          {title}
        </h2>

        {contents.map((contant, index) => (
          <div key={index} className="mt-8">
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
          </div>
        ))}
      </div>
    </section>
  );
}