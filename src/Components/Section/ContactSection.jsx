import React, { useState } from 'react';
import bgContact from '../../Assets/bgContact.jpg';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Nomor WhatsApp kamu (Gunakan kode negara tanpa tanda + atau nol di depan)
    const phoneNumber = "6289687963824"; 
    
    const messageText = `Halo Naufal 👋

Saya baru saja melihat portfolio Anda dan tertarik untuk berdiskusi lebih lanjut.

Nama: ${formData.name}
Email: ${formData.email}
Subjek: ${formData.subject}

Pesan:
${formData.message}

Semoga kita bisa bekerja sama 🚀`;

    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col pt-20 md:pt-28 bg-black"
    >
      {/* Parallax Background Layer */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgContact})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      <div className="w-full flex flex-col flex-1">
      {/* Creative Asymmetric Header */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 lg:px-24 mb-4 shrink-0">
        <div className="flex flex-col">
          <h2 className="contact-text-reveal text-5xl sm:text-6xl md:text-9xl font-black tracking-tighter text-white leading-none uppercase">
            Let's
          </h2>
          <div className="flex items-start -mt-2 md:-mt-4">
            <h2 className="contact-text-reveal text-5xl sm:text-6xl md:text-9xl font-light italic text-[#38bdf8] lowercase leading-none ml-8 sm:ml-16 md:ml-32 drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]">
              Connect
            </h2>

            {/* Scribble Arrow - Starts next to 't' of Connect */}
            <div className="contact-arrow mt-4 md:mt-8 ml-[-80px] sm:ml-[-120px] md:ml-[-140px] opacity-0 overflow-visible scale-75 md:scale-100">
              <svg
                width="280"
                height="650"
                viewBox="-100 0 400 650"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#38bdf8]"
              >
                {/* First Scribble Line: Curves right then back left to align with 't' in Let's */}
                <path
                  d="
                    M10 10 
                    C100 10, 150 60, 80 120
                    C-50 200, 10 300, -20 400
                    C-40 480, -10 540, -20 580
                  "
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Arrowhead 1 - Straight Down */}
                <path
                  d="M-35 565 L-20 580 L-5 565"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Second Scribble Line (Doodle Effect) */}
                <path
                  d="
                    M20 20
                    C110 20, 160 70, 90 130
                    C-40 210, 20 310, -10 410
                    C-30 490, 0 550, -10 590
                  "
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Arrowhead 2 - Straight Down */}
                <path
                  d="M-25 575 L-10 590 L5 575"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-8 md:px-16 lg:px-24 pb-32 md:pb-12">
        <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#38bdf8] uppercase tracking-widest ml-1">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#38bdf8]/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#38bdf8] uppercase tracking-widest ml-1">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#38bdf8]/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#38bdf8] uppercase tracking-widest ml-1">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#38bdf8]/50 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#38bdf8] uppercase tracking-widest ml-1">
                Message
              </label>

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#38bdf8]/50 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#38bdf8] text-black font-bold rounded-xl hover:bg-[#22d3ee] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 uppercase tracking-widest mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;