import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqs: FAQItem[] = [
    {
      question: "How do I join headquarter?",
      answer:
        "We review your proof of work to ensure you're a serious builder. Fill out the waitlist form and share details about what you've built. We prioritize active product builders who can contribute to the community.",
    },
    {
      question: "Is headquarter free?",
      answer:
        "Yes, we offer early access to builders who contribute to the community. Our goal is to create value for everyone involved, so we focus on quality of participation rather than charging fees.",
    },
    {
      question: "Can I give feedback too?",
      answer:
        "Yes, and we encourage it! Builders earn credibility by offering valuable feedback to others. The community works best when everyone contributes their expertise.",
    },
    {
      question: "What kind of products can I get feedback on?",
      answer:
        "headquarter welcomes digital products of all kinds - SaaS, mobile apps, websites, tools, and more. As long as you're serious about building, we want to help you improve your product.",
    },
    {
      question: "How is hq different from other communities?",
      answer:
        "headquarter focuses exclusively on structured feedback from verified builders. We're not a general discussion forum or social network, we're laser focused on helping you improve your product through quality feedback.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Set up refs array
    contentRefs.current = contentRefs.current.slice(0, faqs.length);
  }, [faqs.length]);

  return (
    <section id="faq" className="section-spacing relative bg-gradient-to-b from-socl-background/80 to-socl-background/80">
      <div className="container-custom relative z-10 ">
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <h2 className="heading-2 text-center mb-12 heading-gradient">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`glass-card overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "shadow-lg border border-socl-primary/30"
                    : "border border-socl-border hover:border-socl-border/60"
                } glow-effect ${openIndex === index ? "glow-primary" : ""}`}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none group"
                  onClick={() => toggleFAQ(index)}
                >
                  <span
                    className={`font-semibold transition-colors duration-300 ${
                      openIndex === index
                        ? "bg-gradient-to-r from-socl-primary to-socl-accent bg-clip-text text-transparent"
                        : "text-socl-text group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-socl-primary"
                        : "text-socl-muted"
                    }`}
                  >
                    <ChevronDown
                      size={20}
                      className="transition-all duration-300"
                    />
                  </div>
                </button>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className={`faq-content overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "open" : ""
                  }`}
                  style={{
                    maxHeight:
                      openIndex === index
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : "0px",
                  }}
                >
                  <div className="px-6 pb-4">
                    <p className="text-socl-muted">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
