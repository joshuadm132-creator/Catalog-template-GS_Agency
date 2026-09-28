
import { business } from "@/config/business";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          <div>
            <h2 className="text-xl font-bold">
              {business.footerData.companyName}
            </h2>

            <p className="mt-3 text-gray-400 max-w-md">
              {business.footerData.description}
            </p>
          </div>

        {business.footerData.sections.map((item) => (
          <div> 
            <h2 className="text-xl font-bold">
              {item.title}
            </h2>
            <div className=" mt-3 flex flex-col gap-4 pb-5" >
            {item.links.map((itemLink) => (
              <Link
               key={itemLink?.href}
                href={itemLink?.href ?? '#'}
                className="text-gray-400 hover:text-white transition-colors"  
              >
                {itemLink.label}
              </Link>
            ))}
            </div>
          </div>
            ))}

        
          <div>
            <h3 className="font-semibold">
              Contact
            </h3>

            <div className="mt-3 space-y-2 text-gray-400">
              <p>{business.contact.phone}</p>
              <p>{business.contact.email}</p>
              <p>{business.location}</p>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-sm text-gray-400">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}