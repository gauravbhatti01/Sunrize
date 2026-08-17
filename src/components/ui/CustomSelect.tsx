"use client";

import { useState, useRef, useEffect } from "react";

interface CustomSelectProps {
  options: string[];
  defaultValue: string;
  name?: string;
  direction?: "up" | "down";
}

export function CustomSelect({ options, defaultValue, name, direction = "down" }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      {name && <input type="hidden" name={name} value={selected} />}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-12 px-4 rounded-xl border-2 bg-white text-ink text-sm font-medium outline-none transition-colors flex items-center justify-between ${
          isOpen ? "border-sunrise" : "border-purple-100"
        }`}
      >
        <span className="truncate pr-2">{selected}</span>
        <svg 
          className={`w-4 h-4 text-ink/50 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      {isOpen && (
        <div 
          className={`absolute left-0 w-full bg-white rounded-xl border border-ink/5 overflow-hidden z-50 py-1 animate-rise ${
            direction === "up" 
              ? "bottom-full mb-2 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.15)] origin-bottom" 
              : "top-full mt-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] origin-top"
          }`}
        >
          {options.map((option) => (
            <div
              key={option}
              className={`px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors flex items-center justify-between ${
                selected === option ? "bg-sunrise/5 text-sunrise" : "text-ink hover:bg-paper-deep"
              }`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
              {selected === option && (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
