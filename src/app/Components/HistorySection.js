"use client";
import { motion } from "motion/react";
import { 
  FaUserGraduate, 
  FaBookReader, 
  FaHandsHelping, 
  FaLaptopCode, 
  FaBriefcase, 
  FaRupeeSign 
} from "react-icons/fa";

const features = [
  {
    title: "Expert and Experienced Faculty for SAP, Data Science and Data Analyst",
    text: "At Techtonic lab, you get the most experienced teachers and trainers who prepare you for your ideal jobs. Our professionals have real industry experience and are the best in Nagpur for SAP courses in Nagpur, Data Science Courses in Nagpur and Data Analyst Courses in Nagpur.",
    icon: <FaUserGraduate />
  },
  {
    title: "Curriculum Designed for The Industry Demand",
    text: "Our curriculum stays up-to-date. Our courses in SAP, Data Science and Data Analytics & Corporate Grooming and Personality Development are crafted with care and adjusted according to the industry demand making you appealing to your dream employer.",
    icon: <FaBookReader />
  },
  {
    title: "Experienced Mentorship and Support",
    text: "We help you plan your preferred career journey with the help of our experts and provide proper counselling and guidance for students enrolling in data analyst classes in Nagpur, data science classes in Nagpur and sap institute in Nagpur. Advancing your career suitable to your needs is our highest priority and hence we assure you get the best mentorship every step of the way.",
    icon: <FaHandsHelping />
  },
  {
    title: "Practical Application Based Learning",
    text: "We train through real projects and focus on application more than acquiring knowledge. We make sure to teach you how to navigate in real-world scenarios wherever you go. We create an environment that focuses on hands-on training much more than theory through IT classes in Nagpur.",
    icon: <FaLaptopCode />
  },
  {
    title: "Placement Assistance",
    text: "We have partnership with the top companies in the industry and match you with the perfect choice for you. We match you with an employer who wants your exact skills and hence we have a high rate of placement.",
    icon: <FaBriefcase />
  },
  {
    title: "Affordable Learning",
    text: "Our affordable pricing structure makes practical knowledge and training more accessible. Get in touch with us to know more!",
    icon: <FaRupeeSign />
  }
];

export default function WhyChooseUsFullText() {
  return (
    <section className="w-full bg-black py-20 px-6 md:px-12 lg:px-20 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* --- LEFT COLUMN: STICKY HEADER (The "Why" & Introduction) --- */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-24 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                Why Choose <br className="hidden lg:block" />
                <span className="text-emerald-500">Techtonic Lab</span> <br className="hidden lg:block" />
                for IT Classes in Nagpur?
              </h2>
              
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
                <p className="text-zinc-300 font-medium italic mb-4 leading-relaxed">
                  &quot;Which skills to learn? Will they be actually applicable? What steps to take? How to decide the right field for you? How to approach companies?&quot;
                </p>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
                  All these questions can seem pretty daunting when you are trying to answer them all by yourself. Hence, choosing the right training institute can change the trajectory of your career in the best way possible! Choosing the right IT training institute in Nagpur can completely transform your career journey.
                </p>
                <p className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">
                  We specialize in :
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: SCROLLING CONTENT (The 6 Points) --- */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/30 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-zinc-900/60"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Icon Circle */}
                <div className="shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-400 text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/50">
                    {item.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-zinc-100 leading-snug group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
