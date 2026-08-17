"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

function formatInr(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function calcEmi(principal: number, annualRate: number, years: number) {
  if (principal <= 0 || years <= 0) {
    return { emi: 0, totalPayment: 0, totalInterest: 0 };
  }
  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;
  if (monthlyRate === 0) {
    const emi = principal / months;
    return { emi, totalPayment: principal, totalInterest: 0 };
  }
  const factor = (1 + monthlyRate) ** months;
  const emi = (principal * monthlyRate * factor) / (factor - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;
  return { emi, totalPayment, totalInterest };
}

export function EmiCalculator() {
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(7.75);
  const [tenure, setTenure] = useState(30);

  const result = useMemo(
    () => calcEmi(amount, rate, tenure),
    [amount, rate, tenure],
  );

  // Math for Pie Chart
  const circumference = 2 * Math.PI * 50; // r=50
  const principalPercent = result.totalPayment > 0 ? amount / result.totalPayment : 0;
  const principalDash = principalPercent * circumference;

  return (
    <section id="emi-calculator" className="scroll-mt-24 py-16 sm:py-20 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink tracking-tight">
            Home Loan EMI Calculator
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-[1440px] mx-auto px-4 sm:px-8">

          {/* Left Column: Sliders */}
          <div className="space-y-12 py-4">

            {/* Amount Slider */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">Loan Amount</span>
                <div className="flex items-center gap-1.5 bg-[#F8FAFC] px-4 py-2.5 rounded-xl border-2 border-purple-100">
                  <span className="text-ink-soft font-medium">₹</span>
                  <span className="font-mono font-bold text-xl text-ink">{amount.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <input
                type="range"
                min={100000}
                max={100000000}
                step={100000}
                value={amount}
                onChange={(event) => setAmount(Number(event.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer outline-none slider-thumb-brand"
                style={{
                  background: `linear-gradient(to right, #EA580C ${((amount - 100000) / (100000000 - 100000)) * 100}%, #f1f5f9 ${((amount - 100000) / (100000000 - 100000)) * 100}%)`
                }}
              />
              <div className="flex justify-between text-xs font-semibold text-ink/40 mt-4 uppercase tracking-widest">
                <span>₹1 Lac</span>
                <span>₹10 Cr</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">Tenure (Years)</span>
                <div className="flex items-center gap-1.5 bg-[#F8FAFC] px-4 py-2.5 rounded-xl border-2 border-purple-100">
                  <span className="font-mono font-bold text-xl text-ink">{tenure}</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenure}
                onChange={(event) => setTenure(Number(event.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer outline-none slider-thumb-brand"
                style={{
                  background: `linear-gradient(to right, #EA580C ${((tenure - 1) / (30 - 1)) * 100}%, #f1f5f9 ${((tenure - 1) / (30 - 1)) * 100}%)`
                }}
              />
              <div className="flex justify-between text-xs font-semibold text-ink/40 mt-4 uppercase tracking-widest">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Interest Slider */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-soft">Interest Rate</span>
                <div className="flex items-center gap-1.5 bg-[#F8FAFC] px-4 py-2.5 rounded-xl border-2 border-purple-100">
                  <span className="font-mono font-bold text-xl text-ink">{rate.toFixed(2)}</span>
                  <span className="text-ink-soft font-medium">%</span>
                </div>
              </div>
              <input
                type="range"
                min={0.5}
                max={15}
                step={0.05}
                value={rate}
                onChange={(event) => setRate(Number(event.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer outline-none slider-thumb-brand"
                style={{
                  background: `linear-gradient(to right, #EA580C ${((rate - 0.5) / (15 - 0.5)) * 100}%, #f1f5f9 ${((rate - 0.5) / (15 - 0.5)) * 100}%)`
                }}
              />
              <div className="flex justify-between text-xs font-semibold text-ink/40 mt-4 uppercase tracking-widest">
                <span>0.5%</span>
                <span>15%</span>
              </div>
            </div>

          </div>

          {/* Right Column: Results & Pie Chart */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 bg-ink rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.1)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

            {/* Text Summary */}
            <div className="space-y-8 flex-1 w-full relative z-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Monthly EMI</p>
                <p className="font-display text-5xl font-bold text-sunrise">{formatInr(result.emi)}</p>
              </div>

              <div className="space-y-6 pt-8 border-t border-white/10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1.5">Principal Amount</p>
                  <p className="font-mono text-xl font-medium text-white">{formatInr(amount)}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1.5">Interest Amount</p>
                  <p className="font-mono text-xl font-medium text-white">{formatInr(result.totalInterest)}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1.5">Total Payable</p>
                  <p className="font-mono text-xl font-medium text-white">{formatInr(result.totalPayment)}</p>
                </div>
              </div>

              <div className="pt-4">
                <Button href="/apply" className="w-full !rounded-xl !py-4 !bg-sunrise hover:!bg-sunrise-deep text-white font-bold transition-all shadow-[0_8px_30px_rgba(234,88,12,0.3)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.5)]">
                  Get a Call Back
                </Button>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="w-64 h-64 sm:w-72 sm:h-72 flex-shrink-0 relative mt-4 lg:mt-0 z-10">
              {result.totalPayment > 0 && (
                <svg viewBox="0 0 120 120" className="w-full h-full transform -rotate-90">
                  {/* Background Circle (Interest) - White/10 */}
                  <circle cx="60" cy="60" r="50" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="16" />

                  {/* Foreground Circle (Principal) - Sunrise */}
                  <circle
                    cx="60" cy="60" r="50"
                    fill="transparent"
                    stroke="#EA580C"
                    strokeWidth="16"
                    strokeDasharray={`${principalDash} ${circumference}`}
                    strokeLinecap="round"
                    className="transition-all duration-500 ease-out"
                  />
                </svg>
              )}
            </div>

          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .slider-thumb-brand::-webkit-slider-thumb {
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: white;
          border: 4px solid #EA580C;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(234, 88, 12, 0.3);
          transition: transform 0.15s ease;
        }
        .slider-thumb-brand::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        .slider-thumb-brand::-moz-range-thumb {
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: white;
          border: 4px solid #EA580C;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(234, 88, 12, 0.3);
          transition: transform 0.15s ease;
        }
        .slider-thumb-brand::-moz-range-thumb:hover {
          transform: scale(1.1);
        }
      `}} />
    </section>
  );
}
