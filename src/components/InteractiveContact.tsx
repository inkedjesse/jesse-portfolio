import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const InteractiveContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/sntsjessemae@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          _subject: `[Portfolio] ${formState.subject}`,
          message: formState.message,
          _template: 'table',
        }),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok || (data && (data.success === false || data.success === 'false'))) {
        throw new Error(data?.message || 'Unable to send message right now.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to send your message right now. Please try emailing directly.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-100/70 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-xs font-semibold text-brand-700 dark:text-brand-400 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" /> Start a Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Let's Connect for Opportunities
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            I'm currently seeking an IT / Frontend internship. Feel free to reach out directly via email, phone, or send a quick note below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 relative group hover:border-brand-500/50 transition-all shadow-sm dark:shadow-none">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-slate-900 dark:text-white font-medium hover:text-brand-600 dark:hover:text-brand-400 transition-colors text-sm sm:text-base"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-xs flex items-center gap-1"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-2 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Copied to clipboard!
                </div>
              )}
            </div>

            {/* Phone Card */}
            <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 group hover:border-brand-500/50 transition-all shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Contact Number</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-slate-900 dark:text-white font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm sm:text-base"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 group hover:border-brand-500/50 transition-all shadow-sm dark:shadow-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Location</div>
                  <div className="text-slate-900 dark:text-white font-medium text-sm sm:text-base">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-4 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <div className="font-semibold text-brand-700 dark:text-brand-300">Target Role:</div>
              <p>Frontend Engineering • QA / Software Testing • UI/UX Design • Full-Stack Web Development</p>
            </div>

          </div>

          {/* Interactive Message Box */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-none">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                  Thanks for reaching out, <strong className="text-brand-600 dark:text-brand-300">{formState.name}</strong>! 
                  Your message has been delivered to <span className="text-emerald-700 dark:text-emerald-300 font-mono">{PERSONAL_INFO.email}</span>. I will get back to you soon.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setError(null);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. IT Internship Opportunity / Web Project"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Jesse, we'd love to discuss an IT opportunity with our team..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {error && (
                  <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-xs text-red-700 dark:text-red-200 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-500 dark:text-red-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p>{error}</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formState.message + '\n\n— From ' + formState.name + ' (' + formState.email + ')')}`}
                        className="inline-block text-brand-600 dark:text-brand-300 hover:text-brand-500 dark:hover:text-brand-200 underline font-medium"
                      >
                        Send via your email app instead
                      </a>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-600 hover:to-indigo-700 text-white shadow-lg shadow-brand-500/25 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
