import Gallery from "@/components/galler";
import { business } from "@/config/business";
export default function ContactPage() {
  return (
    <main>
      <Gallery
        title={business.Gallery.title}
        items={business.Gallery.items}
        
      />
    </main>
  );
}