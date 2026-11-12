import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
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
    <div className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-12">
        <div className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-widest mb-3">
          [05 // INQUIRIES &amp; ENGAGEMENT]
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[#F2F2EF] tracking-tight">
          Contact &amp; Transmissions
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Direct Email + Verified Links */}
        <div className="lg:col-span-7 space-y-12">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#F2F2EF] tracking-tight leading-tight">
              Let's talk systems.
            </h2>
            <p className="font-sans text-sm md:text-base text-[#9AA0AA] mt-4 max-w-lg leading-relaxed">
              Open to Software Development Engineer (SDE), Applied AI, and Machine Learning engineering roles.
              Always open to discussing biometric audio forensics, RAG benchmarks, or high-throughput architectures.
            </p>
          </div>

          {/* Copyable Email Callout */}
          <div className="space-y-2">
            <span className="font-mono-code text-xs text-[#5C626D] uppercase tracking-widest">
              DIRECT INBOX (CLICK TO COPY)
            </span>
            <div
              onClick={handleCopyEmail}
              className="group p-6 bg-[#11151C] border border-white/[0.08] hover:border-[#FB5E28] transition-all flex items-center justify-between cursor-pointer rounded-lg"
            >
              <span className="font-mono-code text-base sm:text-2xl text-[#F2F2EF] group-hover:text-[#FB5E28] transition-colors break-all">
                {email}
              </span>
              <span className="font-mono-code text-xs text-[#FB5E28] shrink-0 ml-4">
                {copied ? '[COPIED TO CLIPBOARD ✓]' : '[COPY]'}
              </span>
            </div>
          </div>

          {/* Verified Profiles */}
          <div className="space-y-4">
            <span className="font-mono-code text-xs text-[#5C626D] uppercase tracking-widest">
              VERIFIED IDENTITIES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-code text-xs">
              <a
                href="https://github.com/uk0976"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#11151C] border border-white/[0.08] hover:border-white/20 text-[#F2F2EF] hover:text-[#FB5E28] transition-colors flex items-center justify-between rounded-lg"
              >
                <span>GitHub // uk0976</span>
                <span>↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/umer-khan-57a458288/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#11151C] border border-white/[0.08] hover:border-white/20 text-[#F2F2EF] hover:text-[#FB5E28] transition-colors flex items-center justify-between rounded-lg"
              >
                <span>LinkedIn // Umerkhan</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Dispatch Form */}
        <div className="lg:col-span-5 p-8 bg-[#11151C] border border-white/[0.08] rounded-lg">
          <div className="font-mono-code text-xs text-[#FB5E28] uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FB5E28] rounded-full animate-pulse" />
            DIRECT TRANSMISSION PROTOCOL
          </div>

          {formSubmitted ? (
            <div className="p-8 text-center space-y-4 bg-white/[0.02] border border-white/5 font-mono-code text-xs rounded-lg">
              <div className="text-[#FB5E28] text-xl font-bold">✓</div>
              <h3 className="font-display text-xl font-bold text-[#F2F2EF]">Transmission Dispatched</h3>
              <p className="text-[#9AA0AA]">
                Your message has been logged. I will respond to your provided address within 24 hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 underline text-[#F2F2EF] hover:text-[#FB5E28] cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-mono-code text-xs">
              <div>
                <label className="block text-[#9AA0AA] uppercase tracking-wider mb-2">
                  YOUR NAME / ORGANIZATION
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Hiring Manager / Founder"
                  className="w-full bg-[#090C12] border border-white/[0.08] focus:border-[#FB5E28] text-[#F2F2EF] px-4 py-3 outline-none transition-colors rounded"
                />
              </div>

              <div>
                <label className="block text-[#9AA0AA] uppercase tracking-wider mb-2">
                  RETURN CONTACT ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@organization.com"
                  className="w-full bg-[#090C12] border border-white/[0.08] focus:border-[#FB5E28] text-[#F2F2EF] px-4 py-3 outline-none transition-colors rounded"
                />
              </div>

              <div>
                <label className="block text-[#9AA0AA] uppercase tracking-wider mb-2">
                  MESSAGE SPECIFICATION
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Details regarding your engineering role, project, or research collaboration..."
                  className="w-full bg-[#090C12] border border-white/[0.08] focus:border-[#FB5E28] text-[#F2F2EF] px-4 py-3 outline-none transition-colors resize-none rounded"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#FB5E28] hover:bg-[#FF7A4D] text-white font-semibold uppercase tracking-wider transition-all duration-300 disabled:opacity-50 cursor-pointer rounded shadow-lg shadow-[#FB5E28]/20"
              >
                {loading ? 'TRANSMITTING...' : 'DISPATCH TRANSMISSION →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
