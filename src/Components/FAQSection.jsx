import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How can I contact you?",
    answer:
      "You can reach us through the contact form on our website or email us at clearbusinessbyadrian@gmail.com.",
  },
  {
    question: "How long does it take to get a response?",
    answer:
      "We typically respond within 24-48 hours. If it's urgent, please call us directly.",
  },
  {
    question: "Do I need to make a reservation?",
    answer:
      "Reservations are not required but recommended, especially during peak hours. You can book through our reservation form.",
  },
  {
    question: "Can I modify or cancel my booking?",
    answer:
      "Yes, you can modify or cancel your reservation by contacting us at least 24 hours in advance.",
  },
  {
    question: "Do you offer vegetarian or vegan options?",
    answer:
      "Yes, we have a variety of vegetarian and vegan dishes available. Check out our menu for details.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#1F1F1F] text-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#FFD700] text-center mb-6">
          ❓ Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#FF8C42] rounded-lg p-4 bg-[#2A2A2A] shadow-md"
            >
              <button
                className="w-full flex justify-between items-center text-lg font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-[#FF8C42]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
