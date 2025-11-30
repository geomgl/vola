import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from "./faq-item";

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-left sm:text-center">
          Questions & Answers
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: "What is Vola for?",
    answer:
      "Vola is a HIPAA-compliant virtual receptionist that helps dental practices answer every call, book more appointments, and lighten front-desk workload.",
  },
  {
    question: "Do I need technical skills to use Vola?",
    answer:
      "Not at all! Vola is built with simplicity in mind,No. Setup is simple and guided — most practices are live within minutes.",
  },
  {
    question: "Can I customize Vola?",
    answer:
      "Absolutely! You control how it sounds, what it says, and what information it uses.",
  },

  {
    question: "Can Vola AI handle multiple calls at once?",
    answer:
      "Yes. Vola supports concurrent calls without dropping quality, aiding in front-desk efficiency.",
  },
  {
    question: "Is Vola AI HIPAA compliant?",
    answer: "Yes — HIPAA compliance is built into every part of the system.",
  },
];
