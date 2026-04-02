/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Terminal, 
  ExternalLink,
  ChevronRight,
  Cpu,
  Layers,
  CheckCircle2,
  Linkedin,
  Github,
  Download,
  Eye,
  User,
  MessageSquare
} from "lucide-react";

const RESUME_URL = "public/Manova_Chandramohan_Resume.pdf";

const EXPERIENCE = [
  {
    title: "Lead Quality Engineer",
    company: "Cognizant Technology Solutions",
    location: "Melbourne/Bangalore",
    period: "May 2024 – Present",
    highlights: [
      "Spearheaded technical RFP responses and conceptualized GenAI frameworks to automate requirement analysis, projected to reduce manual client effort by 25%",
      "Architected scalable API and E2E test suites using Playwright and Cucumber.js, increasing overall test coverage by 50%",
      "Optimized Agile workflows by integrating automated quality gates and 'Definition of Done' standards, reducing regression cycle times by 60%",
      "Partnered with Product Owners to translate complex business requirements into clear automation roadmaps, reducing ambiguity by 40%"
    ],
    tools: ["Playwright", "TypeScript", "BDD", "Cucumber", "JIRA", "Bamboo", "GitHub", "GitHub Co-Pilot"]
  },
  {
    title: "Test Lead",
    company: "DXC Technology",
    location: "Bangalore",
    period: "Jul 2021 – May 2024",
    highlights: [
      "Managed 8+ engineers across 3 concurrent automation projects, delivering 30% faster release cycles through effective capacity planning",
      "Formalized an automation playbook and conducted rigorous code reviews to ensure best practices and 100% functional coverage",
      "Developed a ground-up Playwright and BDD Cucumber framework that slashed manual testing time from 15 hours to 2.5 hours",
      "Established Azure DevOps metrics boards to provide stakeholders with real-time visibility into sprint automation health"
    ],
    tools: ["Playwright", "TypeScript", "BDD", "Cucumber", "Selenium", "Java", "Azure DevOps", "Browser Stack"]
  },
  {
    title: "Test Analyst",
    company: "Infosys Limited",
    location: "Bangalore",
    period: "Jul 2017 - Jul 2021",
    highlights: [
      "Successfully migrated Salesforce UI tests to high-speed API workflows, significantly enhancing execution speed and security validation",
      "Implemented robust web services migration frameworks that automated complex data comparison tasks for increased accuracy",
      "Authored comprehensive test strategies and managed the end-to-end execution of functional, authentication, and browser-compatibility suites",
      "Cultivated technical skills in junior team members by providing hands-on training in QA automation and application logic"
    ],
    tools: ["SOA Test", "SOAPUI", "Groovy", "Rally", "Gitlab"]
  },
  {
    title: "Automation Test Engineer",
    company: "DXC Technology",
    location: "Sydney/Bangalore",
    period: "Jan 2014 - Jul 2017",
    highlights: [
      "Engineered automation for legacy Flash/Flex applications, reducing 5 days of manual effort to just 14 hours",
      "Standardized testing artifacts and authored automation user guides to streamline regression processes and data setup",
      "Partnered with developers to diagnose and resolve bugs early in the SDLC, ensuring high-quality software patches and deployments",
      "Maintained seamless communication with international clients and stakeholders to align technical execution with project success"
    ],
    tools: ["Ranorex", "C#", "SOAPUI", "Groovy", "Selenium", "Java", "TFS", "SSMS", "Jenkins"]
  }
];

const SKILLS = [
  { category: "Frameworks", items: ["Playwright", "Selenium", "Cucumber.js", "BDD", "Ranorex"] },
  { category: "Languages", items: ["TypeScript", "Java", "C#", "Groovy", "JavaScript"] },
  { category: "Tools & CI/CD", items: ["Azure DevOps", "Jenkins", "Bamboo", "GitHub Actions", "Gitlab CI"] },
  { category: "Testing Types", items: ["API Testing", "E2E Testing", "UI Automation", "Performance", "Security Validation"] }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E4E4E7] font-sans selection:bg-orange-500/30 overflow-x-hidden">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-20 border-b border-zinc-900 bg-zinc-950/50 backdrop-blur-xl z-[100] hidden md:block">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
              <span className="text-white text-sm">MC</span>
            </div>
            <span>Manova</span>
          </div>
          <div className="flex items-center gap-8 text-sm font-mono text-zinc-400">
            <a href="#summary" className="hover:text-orange-500 transition-colors">Summary</a>
            <a href="#experience" className="hover:text-orange-500 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-orange-500 transition-colors">Skills</a>
            <a href="#resume" className="hover:text-orange-500 transition-colors">Resume</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all">Hire Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-center justify-between gap-16"
          >
            <div className="flex-1 text-center lg:text-left z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-mono text-sm uppercase tracking-widest mb-6"
              >
                <Cpu className="w-4 h-4" />
                <span>Lead Quality Engineer</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-3xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                Manova <br />
                <span className="text-orange-500">Chandramohan</span>
              </h1>
              
              <p className="text-xl md:text-3xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                Engineering <span className="text-white font-medium">quality ecosystems</span> that bridge technical execution with high-level business ROI.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12">
                <a 
                  href="#contact" 
                  className="group relative px-10 py-4 rounded-full bg-orange-500 text-white font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-500/20"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
                <a 
                  href="#resume" 
                  className="px-10 py-4 rounded-full bg-zinc-900 text-white font-bold border border-zinc-800 hover:border-orange-500 transition-all hover:scale-105 active:scale-95"
                >
                  View Resume
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm font-mono text-zinc-500">
                <a href="mailto:mano.c.91@gmail.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors text-lg">
                  <Mail className="w-4 h-4" /> mano.c.91@gmail.com
                </a>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-zinc-800" />
                <a href="tel:+918489728223" className="flex items-center gap-2 hover:text-orange-500 transition-colors text-lg">
                  <Phone className="w-4 h-4" /> +91 84897 28223
                </a>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-2xl">
              <div className="absolute inset-0 bg-orange-500/20 blur-[120px] rounded-full -z-10 animate-pulse" />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative rounded-[40px] border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-xl overflow-hidden group shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-50" />
                <img 
                  src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1920&auto=format&fit=crop" 
                  alt="Engineering Workspace" 
                  className="w-full h-auto rounded-[32px] grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating UI Elements */}
                <div className="absolute top-10 right-10 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 backdrop-blur-md shadow-2xl hidden md:block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Automation Live</span>
                  </div>
                  <div className="w-32 h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: [-128, 128] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full bg-orange-500"
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative Icons */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 p-6 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl hidden xl:block"
              >
                <Terminal className="w-10 h-10 text-orange-500" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 p-6 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl hidden xl:block"
              >
                <Code2 className="w-10 h-10 text-orange-500" />
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-16 p-4 rounded-full bg-orange-500 border border-orange-400 shadow-2xl hidden xl:block"
              >
                <Layers className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]"></span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent" />
        </motion.div>
      </section>

      <main className="relative max-w-5xl mx-auto px-6 py-12">
        {/* Summary Section */}
        <section id="summary" className="mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layers className="w-24 h-24" />
            </div>
            <h2 className="text-5xl md:text-2xl lg:text-3xl font-bold text-white mb-12 flex items-center gap-6 tracking-tighter">
              <Layers className="w-10 h-10 md:w-16 md:h-16 text-orange-500" /> Profile Summary
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-light">
              With over <span className="text-white font-medium">12 years of expertise</span> across Fintech, Healthcare, and Manufacturing, I bridge the gap between
                complex technical execution and high-level business objectives. I don't just manage testing; I engineer
                quality ecosystems that accelerate product delivery and protect brand integrity.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-light">
              
                 As a Senior Quality Leader, I specialize in transforming quality assurance from a bottleneck into a
                competitive
                advantage. By aligning automation strategies with stakeholder goals, I’ve consistently reduced
                operational costs—notably slashing regression cycles from 16 hours to just 2. My focus is on driving ROI
                through intelligent tool selection, architectural oversight, and mentoring high-performing teams to
                deliver excellence at scale.
            </p>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-40">
          <h2 className="text-5xl md:text-2xl lg:text-3xl font-bold text-white mb-20 flex items-center gap-6 tracking-tighter">
            <Briefcase className="w-10 h-10 md:w-16 md:h-16 text-orange-500" /> Professional Experience
          </h2>
          
          <div className="space-y-16">
            {EXPERIENCE.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 border-l border-zinc-800 group"
              >
                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-zinc-800 group-hover:bg-orange-500 transition-colors shadow-[0_0_10px_rgba(249,115,22,0)] group-hover:shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-zinc-400 font-medium">{job.company}</p>
                  </div>
                  <div className="text-sm font-mono text-zinc-500 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
                    {job.period}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {job.highlights.map((item, i) => (
                    <li key={i} className="flex gap-3 text-lg text-zinc-400 leading-relaxed">
                      <ChevronRight className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tools.map((tool, i) => (
                    <span key={i} className="text-sm font-mono uppercase tracking-wider px-2 py-1 bg-zinc-900 text-zinc-500 border border-zinc-800 rounded transition-colors duration-200 hover:border-orange-500 hover:text-orange-500 cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="mb-40">
          <h2 className="text-5xl md:text-2xl lg:text-3xl font-bold text-white mb-20 flex items-center gap-6 tracking-tighter">
            <Terminal className="w-10 h-10 md:w-16 md:h-16 text-orange-500" /> Technical Arsenal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:border-orange-500/50 transition-all"
              >
                <h3 className="text-sm font-mono text-orange-500 mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-300 text-sm border border-zinc-800">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="mb-40">
          <h2 className="text-5xl md:text-2xl lg:text-3xl font-bold text-white mb-20 flex items-center gap-6 tracking-tighter">
            <User className="w-10 h-10 md:w-16 md:h-16 text-orange-500" /> Resume
          </h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <User className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Curriculum Vitae</h3>
                <p className="text-zinc-400 text-sm">Download or view the latest version of my professional resume.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <a 
                href={RESUME_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition-colors border border-zinc-700 font-medium"
              >
                <Eye className="w-4 h-4" /> View
              </a>
              <a 
                href={RESUME_URL} 
                download="public/Manova_Chandramohan_Resume.pdf"
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors font-medium shadow-lg shadow-orange-500/20"
              >
                <Download className="w-4 h-4" /> Download
              </a>
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-40">
          <h2 className="text-5xl md:text-2xl lg:text-3xl font-bold text-white mb-16 flex items-center gap-6 tracking-tighter">
            <GraduationCap className="w-10 h-10 md:w-16 md:h-16 text-orange-500" /> Education
          </h2>
          <div className="space-y-12">
            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 shrink-0 h-fit">
                <GraduationCap className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Bachelor of Engineering (E.C.E)</h3>
                <p className="text-zinc-400">Anna University, Chennai</p>
                <p className="text-sm font-mono text-zinc-500 mt-1">Class of 2012</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 shrink-0 h-fit">
                <GraduationCap className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Diploma in E.C.E</h3>
                <p className="text-zinc-400">Department of Technical Education</p>
                <p className="text-sm font-mono text-zinc-500 mt-1">Class of 2009</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 shrink-0 h-fit">
                <GraduationCap className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">SSLC</h3>
                <p className="text-zinc-400">State Board of Tamil Nadu</p>
                <p className="text-sm font-mono text-zinc-500 mt-1">Class of 2006</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-40">
          <h2 className="text-5xl md:text-2xl lg:text-3xl font-bold text-white mb-20 flex items-center gap-6 tracking-tighter">
            <MessageSquare className="w-10 h-10 md:w-16 md:h-16 text-orange-500" /> Contact Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white tracking-tight">
                Let's build something <span className="text-orange-500 italic">robust</span> together.
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                I'm always open to discussing automation strategies, quality engineering leadership, or new opportunities in the tech space.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all group"
                >
                  <Linkedin className="w-6 h-6 text-zinc-400 group-hover:text-orange-500" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all group"
                >
                  <Github className="w-6 h-6 text-zinc-400 group-hover:text-orange-500" />
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-mono text-zinc-500 uppercase tracking-wider">Email</p>
                  <a href="mailto:mano.c.91@gmail.com" className="text-white hover:text-orange-500 transition-colors">mano.c.91@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-mono text-zinc-500 uppercase tracking-wider">Phone</p>
                  <a href="tel:+918489728223" className="text-white hover:text-orange-500 transition-colors">+91 84897 28223</a>
                </div>
              </div>
              <div className="pt-6 border-t border-zinc-800">
                <p className="text-sm text-zinc-500 italic">
                  Available for remote and on-site opportunities in Melbourne and Bangalore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm font-mono">
            &copy; 2026 Manova Chandramohan
          </p>
          <div className="flex gap-4">
            <button className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-colors text-zinc-400 hover:text-orange-500">
              <ExternalLink className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-colors text-zinc-400 hover:text-orange-500">
              <Code2 className="w-5 h-5" />
            </button>
          </div>
        </footer>

      </main>

      {/* Mobile Navigation Rail (Subtle) */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md flex items-center gap-6 md:hidden z-50 shadow-2xl">
        <a href="#summary" className="text-zinc-500 hover:text-orange-500 transition-colors"><Layers className="w-5 h-5" /></a>
        <a href="#experience" className="text-zinc-500 hover:text-orange-500 transition-colors"><Briefcase className="w-5 h-5" /></a>
        <a href="#skills" className="text-zinc-500 hover:text-orange-500 transition-colors"><Terminal className="w-5 h-5" /></a>
        <a href="#resume" className="text-zinc-500 hover:text-orange-500 transition-colors"><User className="w-5 h-5" /></a>
        <a href="#contact" className="text-zinc-500 hover:text-orange-500 transition-colors"><MessageSquare className="w-5 h-5" /></a>
      </nav>
    </div>
  );
}
