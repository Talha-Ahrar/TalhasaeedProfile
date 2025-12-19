import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { DATA } from "./constants/data";
import profilepic from "./assets/talhap.webp";
import resume from './assets/TalhaCV.pdf';
import { FiGithub, FiLinkedin, FiExternalLink, FiCommand, FiHexagon, FiBox, FiTriangle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.05 } }
};

const letterAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 }
};

// Component for professional text reveal
const RevealText = ({ text, className }) => (
  <motion.span className={className} variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
    {text.split("").map((char, i) => (
      <motion.span key={i} variants={letterAnimation} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.span>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Parallax for background shapes
  const shapeRotation = useTransform(smoothProgress, [0, 1], [0, 360]);
  const footerY = useTransform(smoothProgress, [0.8, 1], [150, 0]);

  return (
    <div className="relative bg-[#050505] text-white overflow-x-hidden selection:bg-white selection:text-black">
      
      {/* --- CINEMATIC SHAPE OVERLAYS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] mix-blend-overlay" />
        
        {/* Floating Shapes */}
        <motion.div style={{ rotate: shapeRotation }} className="absolute top-[10%] left-[5%] text-zinc-900 text-9xl opacity-20"><FiHexagon /></motion.div>
        <motion.div style={{ rotate: shapeRotation }} className="absolute bottom-[15%] right-[10%] text-zinc-800 text-[12rem] opacity-10"><FiTriangle /></motion.div>
        <motion.div style={{ rotate: shapeRotation, scale: 1.5 }} className="absolute top-[40%] right-[-5%] text-zinc-900 text-8xl opacity-20"><FiBox /></motion.div>
        
        {/* Radial Vignette */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(35,35,35,1)_0%,rgba(5,5,5,1)_80%)]" />
      </div>

      <main className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 lg:px-32">
        
        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-20 py-20 lg:py-0">
          
          <motion.div 
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <FiCommand className="text-zinc-600 animate-spin-slow" />
              <span className="text-[10px] font-black tracking-[0.6em] text-zinc-500 uppercase italic">
                Protocol: Active // Identity Verified
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-black leading-[0.85] tracking-tighter uppercase mb-4">
              <span className="text-white inline-block">
                {DATA.name.split(" ")[0]}
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-800 block opacity-90">
                {DATA.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* PROFESSIONAL NICKNAME INTRO */}
            <div className="mb-8 overflow-hidden">
               <RevealText 
                text="You can call me Talha // Engineering with Precision" 
                className="text-zinc-400 font-mono text-[11px] tracking-[0.3em] uppercase block"
               />
            </div>
            
            <p className="text-base md:text-lg text-zinc-500 font-light leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0 lg:border-l lg:border-zinc-800 lg:pl-8">
              {DATA.summary}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-8 items-center justify-center lg:justify-start">
              <a href={resume} target="_blank" rel="noreferrer" 
                 className="relative group overflow-hidden w-full sm:w-auto text-center px-10 py-5 bg-white text-black text-[11px] font-black uppercase tracking-widest transition-all">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Download CV</span>
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <div className="flex gap-8 text-2xl text-zinc-600">
                <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all"><FiLinkedin /></a>
                <a href={DATA.github} target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all"><FiGithub /></a>
                <a href={DATA.whatsapp} target="_blank" rel="noreferrer" className="hover:text-green-500 hover:-translate-y-1 transition-all"><FaWhatsapp /></a>
              </div>
            </div>
          </motion.div>

          {/* --- GEOMETRIC IMAGE CAGE --- */}
          <div className="relative w-full max-w-[400px] lg:max-w-none lg:w-5/12 h-[500px] md:h-[650px] lg:h-[750px] flex items-center justify-center order-1 lg:order-2">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[105%] h-[105%] border border-zinc-800/20 poly-cage"
            />
            <div className="absolute w-[80%] h-[80%] bg-zinc-400/5 poly-cage blur-3xl animate-pulse" />

            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="relative z-20 w-[90%] h-[90%] poly-cage overflow-hidden bg-zinc-950 group border border-zinc-800/50 shadow-2xl"
            >
              <div className="absolute inset-0 bg-zinc-800/20 mix-blend-color z-10 pointer-events-none group-hover:bg-transparent transition-all duration-700" />
              <div className="absolute inset-0 w-full h-[3px] bg-white/10 z-30 top-[-10%] animate-scanline pointer-events-none" />
              
              <img 
                src={profilepic} 
                alt={DATA.name} 
                className="w-full h-full object-cover filter grayscale(100%) contrast-110 brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] z-20" />
            </motion.div>
            
            <div className="absolute w-[90%] h-[90%] border-r border-b border-white/20 poly-cage z-30 pointer-events-none translate-x-4 translate-y-4" />
            <div className="absolute w-[90%] h-[90%] border-l border-t border-white/10 poly-cage z-30 pointer-events-none -translate-x-4 -translate-y-4" />
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section className="py-24 border-t border-zinc-900/50">
          <div className="grid lg:grid-cols-12 gap-8 mb-24 items-end">
            <h3 className="lg:col-span-8 text-5xl md:text-7xl font-black uppercase tracking-tighter">Experience</h3>
            <p className="lg:col-span-4 text-zinc-600 font-mono text-[10px] tracking-[0.5em] uppercase pb-4">Timeline // 01</p>
          </div>

          <div className="space-y-32">
            {DATA.experience.map((exp, idx) => (
              <motion.div {...fadeInUp} key={idx} className="grid lg:grid-cols-12 gap-8 group">
                <div className="lg:col-span-4 border-l-2 border-zinc-900 group-hover:border-white transition-all duration-500 pl-8">
                  <span className="text-zinc-600 font-mono text-xs mb-4 block tracking-widest">{exp.period}</span>
                  <h4 className="text-3xl font-bold uppercase mb-2 group-hover:tracking-wider transition-all">{exp.role}</h4>
                  <p className="text-zinc-500 text-[10px] font-black tracking-widest uppercase">{exp.company}</p>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  {exp.details.map((detail, i) => (
                    <p key={i} className="text-zinc-400 font-light leading-relaxed text-sm md:text-lg hover:text-white transition-colors">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section className="py-24 lg:py-40">
          <h3 className="text-[10px] font-black tracking-[1em] text-zinc-700 mb-20 text-center uppercase">featured works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-zinc-900/20">
            {DATA.projects.map((project, idx) => (
              <motion.a 
                href={project.link} 
                target="_blank"
                rel="noreferrer"
                key={idx} 
                className="group relative h-[500px] bg-[#080808] border border-zinc-900/50 flex flex-col justify-between p-10 overflow-hidden"
              >
                {/* Hover Reveal Effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.19, 1, 0.22, 1]" />
                
                <div className="relative z-10 flex justify-between items-start text-zinc-600 group-hover:text-black transition-colors">
                   <span className="font-mono text-xs">Project // 0{idx + 1}</span>
                   <FiExternalLink className="text-xl" />
                </div>

                <div className="relative z-10 group-hover:text-black transition-colors">
                  <h4 className="text-3xl font-black uppercase mb-4 tracking-tighter group-hover:tracking-tight transition-all">{project.title}</h4>
                  <p className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="mt-4 text-[9px] font-black uppercase tracking-widest border-t border-zinc-800 group-hover:border-black/10 pt-4 flex flex-wrap gap-2">
                    {project.tech}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section className="py-24 border-t border-zinc-900/50">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 bg-zinc-900/50">
            {Object.entries(DATA.skills).map(([category, skills]) => (
              <motion.div {...fadeInUp} key={category} className="p-12 bg-[#050505] hover:bg-zinc-950 transition-all group overflow-hidden relative">
                <FiHexagon className="absolute -right-4 -top-4 text-zinc-900 text-7xl group-hover:text-zinc-800 transition-colors" />
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-10 group-hover:text-zinc-300 transition-colors">{category}</h5>
                <div className="flex flex-col gap-4 relative z-10">
                  {skills.map(s => (
                    <span key={s} className="text-sm font-bold text-zinc-500 hover:text-white transition-colors cursor-default">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="relative py-48 lg:py-64 overflow-hidden border-t border-zinc-900">
          <motion.div style={{ y: footerY }} className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <h2 className="text-[22vw] font-black text-white uppercase tracking-tighter">TALHA</h2>
          </motion.div>

          <div className="relative z-10 text-center px-4">
            <motion.h2 {...fadeInUp} className="text-5xl lg:text-8xl font-black mb-16 uppercase tracking-tight">Let's Connect</motion.h2>
            <a href={`mailto:${DATA.email}`} className="relative group text-xl md:text-4xl lg:text-6xl font-extralight tracking-tighter hover:text-zinc-500 transition-all break-words">
              {DATA.email}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500" />
            </a>
            
            <div className="mt-24 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">
              <span>{DATA.phone}</span>
              <span className="hidden md:block text-zinc-800">|</span>
              <span>{DATA.location}</span>
            </div>
          </div>
        </footer>

      </main>

      <style jsx="true">{`
        .poly-cage {
          clip-path: polygon(12% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%, 0% 12%);
        }
        
        @keyframes scanline {
          0% { top: -10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        
        .animate-scanline {
          animation: scanline 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #222; }
      `}</style>
    </div>
  );
}