"use client";
import { motion } from "motion/react";
import { 
  FaGlobeAsia, 
  FaWallet, 
  FaChartLine, 
} from "react-icons/fa";
import {FaSackDollar} from "react-icons/fa6"

export default function WhyNagpurSection() {
  return (
    <section className="w-full bg-black py-24 px-6 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl text-white font-bold leading-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">IT Courses in Nagpur</span> for Your Career?
          </h2>
        </motion.div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* CARD 1: GLOBAL IT HUB (Wide Card) */}
          <Card 
            colSpan="lg:col-span-8"
            title="Global IT Hub"
            icon={<FaGlobeAsia className="text-3xl text-emerald-400" />}
            delay={0.1}
          >
            There are many companies across India that offer jobs to a large proportion of the population. There is high demand for IT skills in the market and they keep up with the digital advancement driving demand for IT courses in Nagpur.
          </Card>

          {/* CARD 2: AFFORDABLE LEARNING (Tall/Square Card) */}
          <Card 
            colSpan="lg:col-span-4"
            title="Affordable learning"
            icon={<FaWallet className="text-3xl text-emerald-400" />}
            delay={0.2}
          >
            The training for IT courses in India is already affordable, but with Techtonic Lab you can get it all for even more economical prices and high ROI through sap institute in Nagpur.
          </Card>

          {/* CARD 3: GROWING INDUSTRY (Square Card) */}
          <Card 
            colSpan="lg:col-span-4"
            title="Growing Industry"
            icon={<FaChartLine className="text-3xl text-emerald-400" />}
            delay={0.3}
          >
            Technology is ever-advancing and the market is always looking for people with the right skills from data analyst course in Nagpur and data science course in Nagpur.
          </Card>

          {/* CARD 4: HIGH PAYING SECTOR (Wide Card) */}
          <Card 
            colSpan="lg:col-span-8"
            title="High Paying sector"
            icon={<FaSackDollar className="text-3xl text-emerald-400" />}
            delay={0.4}
          >
            The industry offers lucrative salary packages, better than other areas, and a comfortable lifestyle. The IT sector is known for being high-revenue.
          </Card>

        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENT: REUSABLE CARD ---
function Card({ title, children, icon, colSpan, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className={`${colSpan} group relative bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between`}
    >
      {/* Icon Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-zinc-800/50 rounded-2xl group-hover:bg-emerald-500/10 transition-colors">
          {icon}
        </div>
        {/* Subtle arrow decoration */}
        <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
          {children}
        </p>
      </div>
    </motion.div>
  );
}
