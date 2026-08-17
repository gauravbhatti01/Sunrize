const STEPS = [
  {
    step: "1",
    title: "Check Eligibility",
    desc: "Check your eligibility in just 2 minutes.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    )
  },
  {
    step: "2",
    title: "Submit Documents",
    desc: "Submit your basic documents online.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
    )
  },
  {
    step: "3",
    title: "Loan Approval",
    desc: "Get quick approval & loan offer.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
    )
  },
  {
    step: "4",
    title: "Get Disbursed",
    desc: "Funds disbursed directly to your account.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
    )
  }
];

export function HowItWorks() {
  return (
    <section id="process" className="scroll-mt-24 py-16 sm:py-20 bg-[#F8FAFC]">
      <div className="section-shell">
        
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sunrise mb-4">
            How It Works
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            Getting a Loan is Simple
          </h2>
        </div>

        <div className="relative">
          {/* Dotted Line */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] border-t-[3px] border-dotted border-ink/10 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
            {STEPS.map((step, index) => (
              <div key={step.step} className="relative flex flex-col items-center text-center px-2 group">
                
                {/* Arrow head for dotted line on desktop */}
                {index < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-[2.3rem] -right-2 text-ink/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                  </div>
                )}

                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white border-2 border-sunrise text-sunrise shadow-[0_8px_30px_rgba(234,88,12,0.15)] relative group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                  {/* Step Number Badge */}
                  <div className="absolute -bottom-2 bg-sunrise text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="font-display text-lg font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ink-soft max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
