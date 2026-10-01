 
import Services from "@/components/services";
import { business } from "@/config/business";
import Hero from "@/components/hero";
import FeatureGrid from "@/components/FeatureGrid";
import NotOffered from "@/components/NotOffered";
export default function Home() {
  return (
    <main>
    
    <Services
        headline={business.services.headline}
        subheadline={business.services.subheadline}
        services={business.services.contents}
        variant="full"
      />
    <NotOffered
      title={business.notOffered.title}
      intro={business.notOffered.intro}
      items={business.notOffered.items}
      closing={business.notOffered.closing}
      background={business.notOffered.background}
    />
 
      </main>
  );
}