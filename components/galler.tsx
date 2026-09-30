import Image from "next/image";
import Reveal from "@/components/Reveal";
import CustomSection from "@/components/section";

type GalleryItem = {
  title: string;
  src: string;
  alt: string;
};

type GalleryProps = {
  title: string;
  items: GalleryItem[];
};

export default function Gallery({ title, items }: GalleryProps) {
  return (
    <CustomSection background="gray">
      <h2 className="text-3xl font-heading font-bold text-center text-text uppercase">
        {title}
      </h2>

      <div className="mt-16 grid gap-8 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <div className="group relative overflow-hidden rounded-xl border border-border bg-background shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="font-heading font-semibold text-text">
                  {item.title}
                </h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </CustomSection>
  );
}