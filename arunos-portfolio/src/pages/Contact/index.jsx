import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageIntro from "../../components/common/PageIntro/PageIntro";
import LiquidBackground from "../../components/background/LiquidBackground";
import { profileData } from "../../data/profile";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", topic: "Full-Stack engineering", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate telemetry transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", topic: "Full-Stack engineering", message: "" });
    setIsSubmitted(false);
  };

  return (
    <div className="relative w-full min-h-screen py-24 px-6 md:px-12 flex flex-col items-center bg-transparent overflow-hidden">
      {/* Animated Background */}
      <LiquidBackground />

      <div className="relative w-full max-w-5xl z-10 space-y-12">
        <PageIntro title="Contact" />

        {/* Title Header */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent inline-block pb-2">
            Establish Contact
          </h2>
          <p className="text-base text-slate-400 max-w-xl">
            Reach out regarding engineering opportunities, full-stack development, or IoT consulting.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Info & Status Hub */}
          <div className="md:col-span-5 space-y-6">
            {/* Status Panel */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-400">Available for Roles</span>
              </div>
              <h3 className="text-lg font-bold text-white">Let's build something together</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                I am actively seeking software engineering positions and IoT collaboration projects. Typical response time is under 24 hours.
              </p>
            </div>

            {/* Core Specs Info */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-cyan-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 font-bold uppercase tracking-wider">Direct Mail Route</span>
                  <a href={`mailto:${profileData.email}`} className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-purple-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 font-bold uppercase tracking-wider">Location / Timezone</span>
                  <span className="text-sm font-semibold text-slate-200">
                    {profileData.location} (GMT+5:30)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-pink-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 font-bold uppercase tracking-wider">Estimated Latency</span>
                  <span className="text-sm font-semibold text-slate-200">Usually replies in &lt; 24h</span>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-4">
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Connect Matrix</h4>
              <div className="flex gap-4">
                <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-950/85 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"/></svg>
                </a>
                <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-950/85 border border-slate-800 hover:border-purple-500/50 text-slate-400 hover:text-purple-400 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href={profileData.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-950/85 border border-slate-800 hover:border-pink-500/50 text-slate-400 hover:text-pink-400 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Element */}
          <div className="md:col-span-7 bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950/70 border border-slate-800/80 focus:border-cyan-500 rounded-xl px-4 py-3.5 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-300 focus:ring-4 focus:ring-cyan-500/10 font-semibold"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Email Route</label>
                      <input
                        type="email"
                        required
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950/70 border border-slate-800/80 focus:border-cyan-500 rounded-xl px-4 py-3.5 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-300 focus:ring-4 focus:ring-cyan-500/10 font-semibold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Transmission Topic</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-slate-950/70 border border-slate-800/80 focus:border-cyan-500 rounded-xl px-4 py-3.5 text-sm text-slate-200 outline-none transition-all duration-300 focus:ring-4 focus:ring-cyan-500/10 font-semibold cursor-pointer appearance-none"
                    >
                      <option className="bg-slate-950 text-slate-200" value="Full-Stack engineering">Full-Stack engineering role</option>
                      <option className="bg-slate-950 text-slate-200" value="IoT prototyping">IoT / Embedded hardware work</option>
                      <option className="bg-slate-950 text-slate-200" value="Research collaboration">Research collaboration</option>
                      <option className="bg-slate-950 text-slate-200" value="General consultation">General consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Message Core</label>
                      <span className="text-[9px] text-slate-600 font-bold uppercase tracking-wider">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      rows="5"
                      required
                      placeholder="Type your transmission here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950/70 border border-slate-800/80 focus:border-cyan-500 rounded-xl px-4 py-3.5 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-300 focus:ring-4 focus:ring-cyan-500/10 resize-none font-medium leading-relaxed"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:opacity-90 disabled:opacity-50 text-white font-black py-4 rounded-xl text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-purple-500/15 hover:-translate-y-0.5 flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Routing Data String...
                      </>
                    ) : (
                      "Transmit Message String"
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="py-12 flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white">Transmission Successful</h3>
                    <p className="text-sm text-slate-400 font-medium max-w-sm mx-auto leading-relaxed">
                      Your query relating to <strong className="text-cyan-400 font-semibold">{formData.topic}</strong> has been encrypted and successfully routed. A response will be dispatched within 24 hours.
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="bg-slate-900 border border-slate-800 text-slate-300 hover:text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800/60 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;