import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Brand Identity & Web Dev',
    budget: '$8 — $50',
    timeline: '2 — 4 Weeks',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);

  const projectTypes = [
    'Brand Identity & Web Dev',
    'Front-End Web Application',
    'UI/UX & Design System',
    'Brand Guidelines & Packaging',
    'Code Review & Performance',
  ];

  const budgetRanges = [
    '$30 — $100',
    '$100 — $300',
    '$300 — $800',
    '$800 — $1,500',
    '$1,500 — $3,000',
    '$3,000+',
  ];

  const timelines = [
    'Immediate (Next 7 Days)',
    '2 — 4 Weeks',
    '1 — 2 Months',
    'Flexible / Planning Phase',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or organization.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief summary of your project vision.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters of detail.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Project Inquiry: ${formData.projectType} — from ${formData.name}`,
          _replyto: formData.email,
          _captcha: 'false',
          _template: 'table',
          name: formData.name,
          email: formData.email,
          discipline: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && (result?.success === 'true' || result?.success === true || result?.message)) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
        setFormData({
          name: '',
          email: '',
          projectType: 'Brand Identity & Web Dev',
          budget: '$8 — $50',
          timeline: '2 — 4 Weeks',
          message: '',
        });
      } else {
        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Project Brief: ${formData.projectType} —${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail:${formData.email}\nDiscipline: ${formData.projectType}\nBudget:${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Scope:\n${formData.message}`)}`;
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Project Brief: ${formData.projectType} —${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail:${formData.email}\nDiscipline: ${formData.projectType}\nBudget:${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Scope:\n${formData.message}`)}`;
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-neutral-800/80 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Contact Philosophy & Direct Reachout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs text-neutral-400 tracking-wider uppercase mb-2 font-mono">
                Initiate Collaboration
              </p>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Let’s create something extraordinary.
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
                Whether you need a full brand identity from scratch, a design system for your engineering team, or a production-grade front-end web application built in React and Tailwind CSS, I am currently taking on selected projects.
              </p>

              {/* Response Time & Location */}
              <div className="space-y-3 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Typical response time: Within 12 — 24 hours</span>
                </div>
                <p>Location: {PERSONAL_INFO.location} · Remote Worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Functional Project Brief Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-10 rounded-2xl bg-[#0e0e11] border border-neutral-800/90 shadow-2xl">

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-xs">{errorMessage}</p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name-input" className="block text-xs font-mono text-neutral-400 mb-2">
                      Your Name / Organization <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name-input"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova or Studio Minimal"
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 text-sm text-white placeholder-neutral-600 border focus:outline-none transition-colors ${errors.name ? 'border-rose-500' : 'border-neutral-800 focus:border-neutral-500'
                        }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1.5">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email-input" className="block text-xs font-mono text-neutral-400 mb-2">
                      Your Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email-input"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. elena@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 text-sm text-white placeholder-neutral-600 border focus:outline-none transition-colors ${errors.email ? 'border-rose-500' : 'border-neutral-800 focus:border-neutral-500'
                        }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1.5">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Discipline / Project Type Selector */}
                <div>
                  <span className="block text-xs font-mono text-neutral-400 mb-2">
                    Primary Discipline Needed
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`text-xs px-3.5 py-2 rounded-lg border transition-all cursor-pointer ${formData.projectType === type
                          ? 'bg-white text-black font-medium border-white'
                          : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                          }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget & Timeline Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="budget-select" className="block text-xs font-mono text-neutral-400 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget-select"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 text-sm text-white border border-neutral-800 focus:border-neutral-500 focus:outline-none"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b} className="bg-neutral-900 text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline-select" className="block text-xs font-mono text-neutral-400 mb-2">
                      Desired Target
                    </label>
                    <select
                      id="timeline-select"
                      name="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 text-sm text-white border border-neutral-800 focus:border-neutral-500 focus:outline-none"
                    >
                      {timelines.map((t) => (
                        <option key={t} value={t} className="bg-neutral-900 text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="message-textarea" className="block text-xs font-mono text-neutral-400 mb-2">
                    Project Vision & Key Requirements <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message-textarea"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        formRef.current?.requestSubmit();
                      }
                    }}
                    placeholder="Tell me about your product, existing assets, goals, and any specific design references..."
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-900/90 text-sm text-white placeholder-neutral-600 border focus:outline-none resize-none transition-colors ${errors.message ? 'border-rose-500' : 'border-neutral-800 focus:border-neutral-500'
                      }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1.5">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg ${isSuccess
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
                      : 'bg-white text-black hover:bg-neutral-200 shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <Check className="w-4 h-4 text-white stroke-[2.5]" />
                        <span>Message sent</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};