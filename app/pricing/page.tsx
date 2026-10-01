
import Pricing from "@/components/pricing";
import { business } from "@/config/business";

export default function Home() {
  return (
    <main>

      <Pricing
        tiers={business.Pricing.teir}
        comparisonFeatures={business.Pricing.table}
      />
    </main>
  );
}