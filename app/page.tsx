// app/page.tsx
import type { Metadata } from "next";
import { business } from "@/config/business";
import CatalogueHero from "@/components/catalogue-hero";
import CategoryStrip from "@/components/category-strip";
import FeaturedProducts from "@/components/featured-products";
import CatalogueAbout from "@/components/catalogue-about";
import Testimonials from "@/components/testimonials";
import PartnersStrip from "@/components/partners-strip";

export const metadata: Metadata = {
  title: "TECHIAD Products | Paints, Coatings & Sealants in Zimbabwe",
  description:
    "G & S Chemicals Agencies manufactures and distributes TECHIAD paints, coatings, adhesives, and sealants across Zimbabwe. Browse our full range.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <CatalogueHero
        eyebrow={business.hero.eyebrow}
        headline={business.hero.headline}
        description={business.hero.description}
        primaryCta={business.hero.primaryCta}
        secondaryCta={business.hero.secondaryCta}
        image={business.hero.image}
      />

      <CategoryStrip
        title={business.categoriesHeading.title}
        subtitle={business.categoriesHeading.subtitle}
        icons={{
          "paints-coatings": "🎨",
          "adhesives": "🔗",
          "castings-general-sealants": "🧱",
          "currants": "🪵",
          "roofing-flooring-sealants": "🏠",
          "solvents-automotive": "🚗",
        }}
      />

      <FeaturedProducts
        title={business.featuredHeading.title}
        subtitle={business.featuredHeading.subtitle}
        ctaText={business.featuredHeading.ctaText}
        ctaHref={business.featuredHeading.ctaHref}
      />

      <CatalogueAbout
        eyebrow={business.about.eyebrow}
        title={business.about.title}
        paragraphs={business.about.paragraphs}
        cta={business.about.cta}
        image={business.about.image}
        awardCaption={business.about.awardCaption}
      />

      <Testimonials
        title={business.testimonials.title}
        subtitle={business.testimonials.subtitle}
        items={business.testimonials.items}
      />

      <PartnersStrip
        title={business.partners.title}
        subtitle={business.partners.subtitle}
        logos={business.partners.logos}
      />
    </main>
  );
}