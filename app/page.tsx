
import Hero from "@/components/hero";
import About from "@/components/AboutContent"
import Services from "@/components/services"
import { business } from "@/config/business";
import Gallery from "@/components/galler";
import Process from "@/components/workProcess";
export default function Home() {
  return (
   <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
    <Hero

      title={business.name}
      description={business.description}
    />
    <div className="bg-primary text-text-inverse p-8 font-heading text-2xl">
  Theme test
</div>
    <Services
      headline={business.services.headline}
      services={business.services.contents}
        
      />
      <Process
        title={business.process.title}
        subtitle={business.process.subtitle}
        steps={business.process.steps}
      />


    </main>


  );
  
}

