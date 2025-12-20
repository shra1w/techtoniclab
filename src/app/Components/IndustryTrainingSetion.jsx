"use client";
import { motion } from "motion/react";
import { 
  FaHandshake, 
  FaUserTie, 
  FaBriefcase, 
  FaRocket 
} from "react-icons/fa6";

export default function IndustryTrainingSection() {
  return (
    <section className="w-full bg-zinc-50 py-24 px-6 relative overflow-hidden">
      
      {/* Background Pattern (Subtle dots) */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- LEFT COLUMN: CONTENT NARRATIVE --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600 text-sm font-semibold tracking-wide uppercase">
            <FaUserTie className="text-emerald-500" />
            Corporate Ready
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
            Industry Ready Training <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              with Each Course
            </span>
          </h2>

          <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
            <p>
              <strong className="text-zinc-900">Personal development and Strategic Placement.</strong> Along with developing technical skills, we train you for the corporate world by grooming you for the interview, teaching you how to manage things and the systems of a corporate company.
            </p>
            <p>
              We also make sure to match you with your <span className="text-emerald-600 font-medium underline decoration-emerald-200 underline-offset-4">perfect company and job description</span>.
            </p>
          </div>

          {/* Feature List (Optional visual reinforcement) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3 text-zinc-700 font-medium">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <FaBriefcase size={14} />
              </div>
              Interview Grooming
            </div>
            <div className="flex items-center gap-3 text-zinc-700 font-medium">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <FaRocket size={14} />
              </div>
              System Management
            </div>
          </div>
        </motion.div>


        {/* --- RIGHT COLUMN: STATS CARD (Success at a Glance) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Decorative backdrop blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full blur-3xl -z-10" />

          <div className="bg-white border border-zinc-100 shadow-2xl shadow-zinc-200/50 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
            
            {/* Top Icon */}
            <div className="w-20 h-20 bg-emerald-500 text-white rounded-2xl mx-auto flex items-center justify-center text-4xl mb-8 shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform duration-500">
              <FaHandshake />
            </div>

            <h3 className="text-2xl font-bold text-zinc-900 mb-4">
              Real Stories & Successes <br />
              <span className="text-zinc-400 font-normal text-lg">at a Glance</span>
            </h3>

            {/* The Big Stat */}
            <div className="py-6 border-t border-b border-zinc-100 my-6">
              <span className="block text-6xl font-black text-emerald-600 tracking-tighter">
                100+
              </span>
              <span className="text-zinc-500 font-medium uppercase tracking-wider text-sm mt-2 block">
                Partners with Leading Companies
              </span>
            </div>

            <p className="text-zinc-600 leading-relaxed">
              We have a <strong className="text-zinc-900">student-centric approach</strong> that puts placement at highest priority!
            </p>
          </div>

          {/* Floating decoration badge */}
          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-6 -right-6 hidden md:block bg-zinc-900 text-white px-5 py-3 rounded-xl shadow-xl rotate-6"
          >
             <span className="font-bold text-emerald-400">#1</span> Priority
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
