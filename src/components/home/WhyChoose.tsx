const TRUST_FACTORS = [
  {
    title: "Competitive Rates",
    desc: "Lowest interest rates in the market.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    )
  },
  {
    title: "Quick Disbursal",
    desc: "Fast approval and quick disbursal.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    )
  },
  {
    title: "Easy Process",
    desc: "Simple documentation & hassle-free process.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
    )
  },
  {
    title: "Expert Support",
    desc: "Get guidance from our loan experts.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
    )
  },
  {
    title: "Secure & Reliable",
    desc: "Your data is 100% safe and secure.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    )
  }
];

export function WhyChoose() {
  return (
    <section id="why-us" className="scroll-mt-24 w-full bg-ink py-16 sm:py-20 text-white relative">
      {/* Optional subtler grid pattern to match the top */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sunrise mb-4">
            Why Choose SunRize?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Trusted by Thousands, Chosen for a Reason
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 md:divide-x md:divide-white/10">
          {TRUST_FACTORS.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sunrise transition-transform duration-300 hover:scale-110 hover:bg-sunrise/10">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/70 max-w-[200px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
