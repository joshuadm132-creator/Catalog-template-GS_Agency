 
import Services from "@/components/services";
import { business } from "@/config/business";

export default function Home() {
  return (
    <main>

 <Services
        services={business.services}
        variant ="full"
      />
      </main>
  );
}