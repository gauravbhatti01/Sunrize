import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CustomSelect } from "@/components/ui/CustomSelect";

export function Hero() {
  return (
    <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto relative">

      {/* Wrapper to contain the absolute form relative to the hero image */}
      <div className="relative">

        {/* Hero Image Container */}
        <div className="relative rounded-[2rem] overflow-hidden h-[400px] md:h-[480px] lg:h-[520px] shadow-2xl flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80"
            alt="Modern residential exterior"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent"></div>

          {/* Top Right Trust Badge */}
          <div className="absolute top-8 right-8 hidden sm:block bg-white rounded-full px-5 py-2.5 shadow-sm animate-rise-delay-2">
            <span className="text-sm font-bold text-ink">Trusted by 25K+ Families</span>
          </div>

          {/* Main Text Content */}
          <div className="relative z-10 w-full max-w-3xl px-8 sm:px-16 text-white mb-16">
            <div className="animate-rise inline-flex items-center gap-2 mb-6 rounded-full border border-white/10 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Authorized DSA • Real Human Experts
            </div>
            <h1 className="animate-rise-delay-1 font-display text-5xl sm:text-6xl md:text-[5rem] font-bold leading-[1.05] tracking-tight">
              Discover Loans<br />That Feel Like Home.
            </h1>
            <p className="animate-rise-delay-2 mt-6 text-lg sm:text-xl text-white/80 max-w-xl font-medium leading-relaxed">
              Compare handpicked home loan offers from 40+ top banks with honest, transparent advice.
            </p>
          </div>
        </div>

        {/* Floating Action Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[92%] sm:w-[85%] max-w-5xl bg-white rounded-[2rem] p-4 sm:p-6 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] flex flex-col sm:flex-row items-end gap-4 animate-rise-delay-3">

          <div className="flex-1 w-full">
            <label className="text-xs font-bold text-ink-soft mb-1.5 block">Mobile no</label>
            <input
              type="tel"
              placeholder="Enter 10 digit mobile"
              className="w-full h-12 px-4 rounded-xl border-2 border-purple-100 bg-white text-ink text-sm font-medium outline-none focus:border-sunrise transition-colors"
            />
          </div>

          <div className="flex-1 w-full">
            <label className="text-xs font-bold text-ink-soft mb-1.5 block">Loan Type</label>
            <CustomSelect
              direction="up"
              defaultValue="Home Loan"
              options={["Home Loan", "Business Loan", "Loan Against Property", "Personal Loan"]}
            />
          </div>

          <div className="flex-1 w-full">
            <label className="text-xs font-bold text-ink-soft mb-1.5 block">Employment</label>
            <CustomSelect
              direction="up"
              defaultValue="Salaried"
              options={["Salaried", "Self Employed", "Professional"]}
            />
          </div>

          <div className="flex-1 w-full">
            <label className="text-xs font-bold text-ink-soft mb-1.5 block">Loan Amount</label>
            <CustomSelect
              direction="up"
              defaultValue="₹50L - ₹1Cr"
              options={["Under ₹50L", "₹50L - ₹1Cr", "₹1Cr - ₹5Cr", "Above ₹5Cr"]}
            />
          </div>

          <div className="w-full sm:w-auto flex-shrink-0">
            <Button href="/apply" className="w-full sm:w-auto h-12 !rounded-xl !px-8 !bg-sunrise hover:!bg-sunrise-deep text-white font-bold text-sm shadow-md">
              Submit Details
            </Button>
          </div>

        </div>
      </div>

    </section>
  );
}
