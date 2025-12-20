"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqData = [
  {
    question: "How do I contact you?",
    answer: "You can call us on the given phone number anytime or e-mail us! We would also love to meet you in person and discuss things in more detail, so you can visit any of our branches."
  },
  {
    question: "What IT courses do you offer?",
    answer: "We offer IT Courses for Data Analytics, Data Science and SAP that are aligned with Industry Demands."
  },
  {
    question: "Are your IT courses suitable for beginners?",
    answer: "Absolutely! We have courses for people with non-tech backgrounds as well as for professionals."
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer: "Yes. You will receive proper certifications at the end of your course."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-zinc-950 py-24 px-6 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* --- LEFT COLUMN: HEADING --- */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sticky top-24"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              FAQs for <br />
              <span className="text-emerald-500">IT Courses</span>, <br />
              SAP & Data Science
            </h2>
            <p className="text-zinc-400 text-lg">
              Have questions? We have answers. Find out everything you need to know about our courses in Nagpur.
            </p>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: QUESTIONS LIST --- */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-zinc-900/50 border-emerald-500/50 shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)]" 
                    : "bg-black border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg md:text-xl font-medium transition-colors ${
                    activeIndex === index ? "text-emerald-400" : "text-zinc-200"
                  }`}>
                    {item.question}
                  </span>
                  
                  {/* Toggle Icon */}
                  <span className={`p-2 rounded-full border transition-all duration-300 ${
                    activeIndex === index 
                      ? "border-emerald-500 text-emerald-500 rotate-180" 
                      : "border-zinc-700 text-zinc-500"
                  }`}>
                     {activeIndex === index ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
                  </span>
                </button>

                {/* Answer Content */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-zinc-400 leading-relaxed text-base border-t border-zinc-800/50 pt-4 mt-2">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
