import { motion } from "motion/react";
import Link from "next/link";
import { PiContactlessPaymentFill } from "react-icons/pi";

export default function AboutTextSection() {
  return (
    <section className="relative w-full py-20 px-6 bg-zinc-950 text-zinc-200 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        
        {/* BLOCK 1: THE INTRO 
           Style: Large, centered statement. Acts as the section header.
        */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-100">
            Techtonic Lab is your ideal partner if you are looking for job-ready IT skills through 
            <span className="text-emerald-400 font-medium"> IT courses in Nagpur </span> 
            towards your dream career.
          </p>
        </motion.div>

        {/* BLOCK 2: THE PROBLEM & SOLUTION SPLIT 
           Style: A 2-column grid. Left is the "Question", Right is the "Answer".
           This creates a conversational UI pattern.
        */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-zinc-800 pt-12">
          
          {/* Left: The "Problem" */}
          <div className="md:col-span-5">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-white leading-tight"
            >
              Are you overwhelmed with the ever-changing trends in the job-market and the advancement in technology and its uses?
            </motion.h3>
          </div>

          {/* Right: The "Solution" & "Target Audience" */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-emerald-400 text-lg font-semibold"
            >
              No need to worry, Techtonic Lab has your back!
            </motion.p>
            
            <motion.p 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-zinc-400 leading-relaxed text-lg"
            >
              Whether you are a student looking to start your career, a professional planning to elevate your skills and get ahead in your field or an entrepreneur building your successful venture, Techtonic Lab – a leading IT training institute in Nagpur is your solution.
            </motion.p>
          </div>
        </div>

        {/* BLOCK 3: METHODOLOGY CARD 
           Style: A distinct box background to highlight your "Value Proposition".
        */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 rounded-2xl relative overflow-hidden group"
        >
          {/* Decorative gradient blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-all duration-700" />
          
          <div className="relative z-10 flex flex-col gap-6">
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              We provide education involving hands-on training and practical application, making our IT classes in Nagpur aligned with the highest market demand in real time.
            </p>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed border-l-4 border-emerald-500 pl-6">
              Our goal isn’t only to share information; it is to make you job-ready through industry-focused IT Institute in Nagpur.
            </p>
          </div>
        </motion.div>

        {/* BLOCK 4: CTA 
           Style: Centered text acting as a final sign-off + Button.
        */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center pt-8"
        >
          <p className="text-xl md:text-2xl font-medium text-white mb-8">
            Start your journey towards success by booking a FREE career consultation!
          </p>
          
          <Link href="/connect-with-us" className="inline-block">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold shadow-lg shadow-emerald-900/20 flex items-center gap-3 transition-colors"
            >
              <PiContactlessPaymentFill className="text-2xl"/>
              Book Your Free Consultation
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
