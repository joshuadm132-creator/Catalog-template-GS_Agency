 
import Services from "@/components/services";
import { business } from "@/config/business";

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