import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who reviews my product?",
      answer: "Your product is reviewed by experienced founders and product managers who have built and shipped successful products across various industries including SaaS, consumer apps, and developer tools."
    },
    {
      question: "How long does it take?",
      answer: "You'll receive your detailed written review within 48 hours of submission. We prioritize quality over speed, ensuring each review is thorough and actionable."
    },
    {
      question: "What kind of products do you review?",
      answer: "We review all types of digital products - web apps, mobile apps, SaaS tools, marketplaces, and more. Whether you're pre-launch or already have users, we can provide valuable feedback."
    },
    {
      question: "What if I'm not satisfied with the review?",
      answer: "We stand behind our reviews. If you're not satisfied with the quality or depth of feedback, we'll work with you to address your concerns or provide a full refund."
    },
    {
      question: "Can I get a follow-up review after making changes?",
      answer: "Absolutely! Many founders find it helpful to get a follow-up review after implementing our suggestions. Follow-up reviews are available at a discounted rate."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border border-border">
              <AccordionTrigger className="text-left text-card-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
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