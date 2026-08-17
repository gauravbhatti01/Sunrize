import { TESTIMONIALS } from "@/lib/data/content";
import Image from "next/image";

export function Testimonials() {
  const displayTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <section id="stories" className="scroll-mt-24 py-16 sm:py-20 bg-[#F8FAFC]">
      <div className="section-shell max-w-6xl">
        
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sunrise mb-4">
            Customer Success Stories
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            Real Stories. Real Smiles.
          </h2>
          <div className="mt-6 flex justify-center gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-sunrise"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-sunrise"></div>
             <div className="w-12 h-1.5 rounded-full bg-sunrise"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-sunrise"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-sunrise"></div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {displayTestimonials.map((item, i) => (
            <div
              key={item.id}
              className="bg-white rounded-[2rem] border border-ink/5 p-8 sm:p-10 shadow-lg relative flex flex-col group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1 text-sunrise">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <svg className="w-10 h-10 text-sunrise/10 group-hover:text-sunrise/20 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>

              <p className="text-ink text-base leading-relaxed mb-8 flex-1">
                {item.quote}
              </p>

              <div className="flex items-center gap-4 border-t border-ink/5 pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full bg-paper-deep overflow-hidden relative border border-ink/5 flex-shrink-0">
                  <Image src={`https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=f0a35a&color=fff`} alt={item.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <h4 className="font-bold text-ink text-sm">{item.name}</h4>
                  <p className="text-xs text-ink-soft mt-0.5">{item.loanType} Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
