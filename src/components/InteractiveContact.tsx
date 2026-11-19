import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

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

  const mailtoFallback = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formState.message + '\n\n— From ' + formState.name + ' (' + formState.email + ')')}`;

  return (
    <section id="contact" className="border-t border-slate-800/80 py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          index="06"
          label="Start a Conversation"
          title="Let's Connect for Opportunities"
          description="I'm currently seeking an IT / Frontend internship. Feel free to reach out directly via email, phone, or send a quick note below!"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Direct contact details */}
          <div className="lg:col-span-5">
            <dl className="panel divide-y divide-slate-800">
              <div className="flex items-start justify-between gap-4 p-5">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  <div>
                    <dt className="font-mono text-xs text-slate-400">Email Address</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="break-all text-[15px] text-slate-100 transition-colors hover:text-brand-300"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </dd>
                    {copied && (
                      <p className="mt-1.5 flex items-center gap-1 font-mono text-[11px] text-emerald-400">
                        <CheckCircle2 className="h-3 w-3" /> Copied to clipboard!
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="rounded-md border border-slate-700 p-2 text-slate-400 transition-colors hover:border-slate-500 hover:text-slate-100"
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <div className="flex items-start gap-3 p-5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <div>
                  <dt className="font-mono text-xs text-slate-400">Contact Number</dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-[15px] text-slate-100 transition-colors hover:text-brand-300"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <div>
                  <dt className="font-mono text-xs text-slate-400">Location</dt>
                  <dd className="mt-1 text-[15px] text-slate-100">{PERSONAL_INFO.location}</dd>
                </div>
              </div>

              <div className="p-5">
                <dt className="font-mono text-xs text-slate-400">Target Role:</dt>
                <dd className="mt-1 text-sm leading-6 text-slate-300">
                  Frontend Engineering • Full-Stack Web Development • UI/UX Design • IT Internships
                </dd>
              </div>
            </dl>
          </div>

          {/* Message form */}
          <div className="panel p-6 sm:p-8 lg:col-span-7">
            {submitted ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
                <h3 className="mt-4 text-xl font-semibold text-slate-50">Message Sent!</h3>
                <p className="mx-auto mt-2 max-w-md text-[15px] leading-7 text-slate-300">
                  Thanks for reaching out, <span className="font-medium text-slate-100">{formState.name}</span>! Your message
                  has been delivered to <span className="font-mono text-emerald-300">{PERSONAL_INFO.email}</span>. I will get
                  back to you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setError(null);
                    setFormState({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-6 rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800/60"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-slate-300">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="field"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-300">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="field"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="e.g. IT Internship Opportunity / Web Project"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="field"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-300">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    placeholder="Hi Jesse, we'd love to discuss an IT opportunity with our team..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="field resize-none"
                  />
                </div>

                {error && (
                  <div role="alert" className="flex items-start gap-2.5 rounded-md border border-red-500/30 bg-red-500/10 p-3.5 text-sm text-red-200">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <div className="space-y-1">
                      <p>{error}</p>
                      <a href={mailtoFallback} className="inline-block font-medium text-brand-300 underline hover:text-brand-200">
                        Send via your email app instead
                      </a>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
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
