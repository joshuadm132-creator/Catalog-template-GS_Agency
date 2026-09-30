 
import Services from "@/components/services";
import { business } from "@/config/business";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <main>
    
    <Services
            headline={business.services.headline}
            services={business.services.contents}
            variant ="full"
          />
 
      </main>
  );
}