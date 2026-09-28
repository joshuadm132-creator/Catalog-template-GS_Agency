
import {Hero} from "@/components/hero";
import About from "@/components/about"
import Services from "@/components/services"
import { business } from "@/config/business";
import Gallery from "@/components/galler";
export default function Home() {
  return (
   <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
    <Hero

      title={business.name}
      description={business.description}
    />
      <About
           title={business.About.title}
          contents={business.About.content}
         />
    <Services
        services={business.services}
      />

    </main>


  );
  
}

