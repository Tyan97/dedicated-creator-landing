"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Can these videos be used as ads too?",
      answer: "Yes—our videos are organic-first by design, but structured so they can be repurposed as ads if you choose."
    },
    {
      question: "Do you manage posting too?",
      answer: "Optional. We offer social management with a CTA + routing system to drive trackable traffic."
    },
    {
      question: "How fast can we start?",
      answer: "Once you're approved and we have access to a demo workspace, production can begin immediately on a monthly cadence."
    },
    {
      question: "Do you write scripts?",
      answer: "We follow your approved format. Most videos are built from a repeatable hook + on-screen workflow + payoff."
    },
    {
      question: "Can you match our existing style?",
      answer: "Yes — that's the point. We lock a format and execute it consistently across every deliverable."
    },
    {
      question: "How do approvals work?",
      answer: "You approve the format and direction async. We keep production moving without bottlenecks."
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-20 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            FAQ
          </span>
          <h2 className="text-[48px] font-bold tracking-tight">
            Common questions
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-accent transition-colors"
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ${
            isOpen ? "rotate-45 text-accent" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
