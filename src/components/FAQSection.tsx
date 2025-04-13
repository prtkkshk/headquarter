
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqs: FAQItem[] = [
    {
      question: "How do I join SOCL?",
      answer: "We review your proof of work to ensure you're a serious builder. Fill out the waitlist form and share details about what you've built. We prioritize active product builders who can contribute to the community."
    },
    {
      question: "Is SOCL free?",
      answer: "Yes, we offer early access to builders who contribute to the community. Our goal is to create value for everyone involved, so we focus on quality of participation rather than charging fees."
    },
    {
      question: "Can I give feedback too?",
      answer: "Yes, and we encourage it! Builders earn credibility by offering valuable feedback to others. The community works best when everyone contributes their expertise."
    },
    {
      question: "What kind of products can I get feedback on?",
      answer: "SOCL welcomes digital products of all kinds - SaaS, mobile apps, websites, tools, and more. As long as you're serious about building, we want to help you improve your product."
    },
    {
      question: "How is SOCL different from other communities?",
      answer: "SOCL focuses exclusively on structured feedback from verified builders. We're not a general discussion forum or social network - we're laser-focused on helping you improve your product through quality feedback."
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="faq" className="section-spacing relative" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-socl-accent/5 opacity-30"></div>
      <div className="absolute -top-40 left-1/3 w-[300px] h-[300px] bg-gradient-radial-soft from-socl-accent/10 to-transparent blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-2 text-center mb-12 text-gradient reveal">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className={`glass-effect rounded-lg overflow-hidden backdrop-blur-md border-socl-border/20 reveal`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:text-socl-accent hover:no-underline transition-all">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-socl-muted">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
