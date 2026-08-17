import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-10 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-ink rounded-[2rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 lg:p-16 gap-10">
          
          {/* Subtle background pattern */}
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

          {/* Left Text */}
          <div className="relative z-10 text-center md:text-left flex-1 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Achieve Your Dreams?
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Apply now and take the first step towards a brighter tomorrow. No automated bots — just real financial guidance.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
            <Button href="/apply" className="w-full sm:w-auto !rounded-xl !px-8 !py-4 !bg-sunrise hover:!bg-sunrise-deep !text-white shadow-md font-bold">
              Apply Now
            </Button>
            <Button href="#contact" className="w-full sm:w-auto !rounded-xl !px-8 !py-4 !bg-white/10 hover:!bg-white/20 !text-white border border-white/20 backdrop-blur-sm transition-colors font-bold">
              Talk to Expert
            </Button>
          </div>

        </div>
        
      </div>
    </section>
  );
}
