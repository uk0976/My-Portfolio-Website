import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const email = 'umerkhandoctor04@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/mqazpddr', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          setFormSubmitted(true);
          form.reset();
        } else {
          alert('Failed to dispatch inquiry. Please email directly at umerkhandoctor04@gmail.com');
        }
      })
      .catch(() => {
        setLoading(false);
        alert('Network error. Please email directly at umerkhandoctor04@gmail.com');
      });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto hairline-t">
      {/* Section Tag */}
      <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-widest mb-3">
        [05 // INQUIRIES &amp; ENGAGEMENT]
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Huge Direct Email + Socials */}
        <div className="lg:col-span-7 space-y-12">
          <div>
            <h2 className="font-display text-4xl md:text-6xl text-[#EDEAE4] tracking-tight leading-tight">
              Let's talk systems.
            </h2>
            <p className="font-sans text-sm md:text-base text-[#949089] mt-4 max-w-lg leading-relaxed">
              Open to Software Development Engineer (SDE), Applied AI, and Machine Learning engineering roles.
              Always open to discussing biometric audio forensics, RAG benchmarks, or high-throughput architectures.
            </p>
          </div>

          {/* Copyable Email Callout */}
          <div className="space-y-2">
            <span className="font-mono-code text-xs text-[#5C5A55] uppercase tracking-widest">
              DIRECT INBOX (CLICK TO COPY)
            </span>
            <div
              onClick={handleCopyEmail}
              className="group p-6 bg-[#121215] border border-white/10 hover:border-[#FF3B00] transition-all flex items-center justify-between cursor-pointer"
              data-cursor="COPY"
            >
              <span className="font-mono-code text-base sm:text-2xl text-[#EDEAE4] group-hover:text-[#FF3B00] transition-colors break-all">
                {email}
              </span>
              <span className="font-mono-code text-xs text-[#FF3B00] shrink-0 ml-4">
                {copied ? '[COPIED TO CLIPBOARD ✓]' : '[COPY]'}
              </span>
            </div>
          </div>

          {/* External Social / Code Links */}
          <div className="space-y-4">
            <span className="font-mono-code text-xs text-[#5C5A55] uppercase tracking-widest">
              VERIFIED IDENTITIES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-code text-xs">
              <a
                href="https://github.com/uk0976"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/[0.02] border border-white/5 hover:border-white/20 text-[#EDEAE4] hover:text-[#FF3B00] transition-colors flex items-center justify-between"
                data-cursor="EXTERNAL"
              >
                <span>GitHub // uk0976</span>
                <span>↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/umer-khan-57a458288/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/[0.02] border border-white/5 hover:border-white/20 text-[#EDEAE4] hover:text-[#FF3B00] transition-colors flex items-center justify-between"
                data-cursor="EXTERNAL"
              >
                <span>LinkedIn // Umerkhan</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Transmission Form */}
        <div className="lg:col-span-5 p-8 bg-[#121215] border border-white/10">
          <div className="font-mono-code text-xs text-[#FF3B00] uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
            DIRECT TRANSMISSION PROTOCOL
          </div>

          {formSubmitted ? (
            <div className="p-8 text-center space-y-4 bg-white/[0.02] border border-white/5 font-mono-code text-xs">
              <div className="text-[#FF3B00] text-xl">✓</div>
              <h4 className="font-display text-xl text-[#EDEAE4]">Transmission Dispatched</h4>
              <p className="text-[#949089]">
                Your message has been logged. I will respond to your provided address within 24 hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 underline text-[#EDEAE4] hover:text-[#FF3B00]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-mono-code text-xs">
              <div>
                <label className="block text-[#949089] uppercase tracking-wider mb-2">
                  YOUR NAME / ORGANIZATION
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Elena Rostova / DeepMind"
                  className="w-full bg-[#09090B] border border-white/10 focus:border-[#FF3B00] text-[#EDEAE4] px-4 py-3 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#949089] uppercase tracking-wider mb-2">
                  RETURN CONTACT ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@organization.com"
                  className="w-full bg-[#09090B] border border-white/10 focus:border-[#FF3B00] text-[#EDEAE4] px-4 py-3 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#949089] uppercase tracking-wider mb-2">
                  MESSAGE SPECIFICATION
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Details regarding your role, engineering opportunity, or research collaboration..."
                  className="w-full bg-[#09090B] border border-white/10 focus:border-[#FF3B00] text-[#EDEAE4] px-4 py-3 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#EDEAE4] hover:bg-[#FF3B00] text-black hover:text-white font-semibold uppercase tracking-wider transition-all duration-300 disabled:opacity-50 cursor-pointer"
                data-cursor="DISPATCH"
              >
                {loading ? 'TRANSMITTING...' : 'DISPATCH TRANSMISSION →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
