 import FadeRotator,{Marquee} from "@/components/FadeRotator";
type HeroProps = {
  title: string;
  description: string;
};

export function Hero({ title, description }: HeroProps) {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 md:min-h-[90vh] bg-gray-100">      
   
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 max-w-4xl">
        {title}
      </h1>

      <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
        {description}
      </p>

      <FadeRotator
        interval={3500}
        items={[
          <p key="1" className="text-2xl font-semibold ">Trusted by 20+ businesses</p>,
          <p key="2" className="text-2xl font-semibold">Fast quality results</p>,
          <p key="3" className="text-2xl font-semibold">Built for growing companies</p>,
        ]}

      />
       <p className="font-mono text-label uppercase text-brass-700 text-sm ">
       morden human sustainable · HARARE, ZIMBABWE
        </p>

     <Marquee duration={20}>
      <div className="flex gap-12">
        <span className = "font-mono text-brass-700">Qulaity</span>
        <span className = "font-mono text-brass-700">Experience</span>
        <span className = "font-mono text-brass-700">Morden</span>
      </div>
    </Marquee>

     <button className="mt-8 self-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
  Contact Us
</button>
    </section>
  );
}