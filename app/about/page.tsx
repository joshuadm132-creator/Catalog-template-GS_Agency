import AboutContent from "@/components/AboutContent";
import TeamRotator from "@/components/TeamRotator";
import Link from "next/link";
import { business } from "@/config/business";

export default function AboutPage() {
  return (
    <main>


      {/* 1. Intro — small, focused */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            About Us
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            We build digital infrastructure for growing businesses.
          </h1>
        </div>
      </section>

      {/* 2. Your values/mission — content blocks */}
      <AboutContent
        title={business.Values.title}
        contents={business.Values.content}
      />

      {/* 3. The team — rotating */}
      <TeamRotator
        title={business.Team.title}
        contents={business.Team.content}
      />

      {/* 4. CTA */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <h2 className="text-3xl font-bold">Want to work with us?</h2>
        <Link
          href="/contact"
          className="inline-block mt-8 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}