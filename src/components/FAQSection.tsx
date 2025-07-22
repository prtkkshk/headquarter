import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who reviews my product?",
      answer:
        "Builders who’ve done it before. Founders and product leaders with deep experience across SaaS, consumer, and beyond, bringing sharp, actionable insights to every review.",
    },
    {
      question: "How long does it take?",
      answer:
        "You'll receive your detailed written review within 48 hours of submission. We prioritize quality over speed, ensuring each review is thorough and actionable.",
    },
    {
      question: "What kind of products do you review?",
      answer:
        "We review all types of digital products - web apps, mobile apps, SaaS tools, marketplaces, and more. Whether you're pre-launch or already have users, we can provide valuable feedback.",
    },
    {
      question: "What if I'm not satisfied with the review?",
      answer:
        "We’re committed to delivering high-quality, actionable feedback. If you’re not satisfied, we’ll address your concerns promptly and ensure you get the value you expected.",
    },
    {
      question: "Can I get a follow-up review after making changes?",
      answer:
        "Absolutely! Many founders find it helpful to get a follow-up review after implementing our suggestions. Follow-up reviews are available at a discounted rate.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-4">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
            <HelpCircle className="w-7 h-7 text-primary" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 tracking-tight flex items-center gap-2 text-center">
            Frequently Asked Questions
          </h2>
        </div>
        <Separator className="my-8 max-w-xs mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/95 rounded-xl px-6 border border-border shadow-md"
            >
              <AccordionTrigger className="text-left text-card-foreground hover:text-primary text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;