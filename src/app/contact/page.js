"use client";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = formRef.current;
    const data = new FormData(form);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: data,
    });
    setSubmitting(false);
    if (res.ok) {
      setDialogOpen(true);
      form.reset();
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#232526] to-[#414345] fade-in">
      <main className="w-full max-w-xl metal-card flex flex-col items-center gap-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#FFD700] drop-shadow-lg transition-colors duration-500 mb-2">Contact</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-gray-200 font-medium">
            Full Name:
            <input
              name="Name"
              type="text"
              className="p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300 hover:scale-[1.03]"
              placeholder="Your Full Name"
              required
              disabled={submitting}
            />
          </label>
          <label className="flex flex-col gap-1 text-gray-200 font-medium">
            Email Address:
            <input
              name="Email"
              type="email"
              className="p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300 hover:scale-[1.03]"
              placeholder="your@email.com"
              required
              disabled={submitting}
            />
          </label>
          <label className="flex flex-col gap-1 text-gray-200 font-medium">
            Subject:
            <input
              name="Subject"
              type="text"
              className="p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300 hover:scale-[1.03]"
              placeholder="Subject of your message"
              required
              disabled={submitting}
            />
          </label>
          <label className="flex flex-col gap-1 text-gray-200 font-medium">
            Message:
            <textarea
              name="Message"
              className="p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300 hover:scale-[1.03]"
              placeholder="Please enter your message here..."
              rows={5}
              required
              disabled={submitting}
            />
          </label>
          <button
            type="submit"
            className="metal-btn self-end transition-transform duration-300 hover:scale-105 hover:shadow-2xl font-semibold px-8 py-2"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {dialogOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
            <div className="bg-[#232526] border border-[#FFD700] rounded-xl p-8 shadow-2xl flex flex-col items-center">
              <span className="text-2xl mb-2 text-[#FFD700]">✅</span>
              <p className="text-gray-200 mb-4">
                Your message has been submitted successfully.<br />
                Thank you for reaching out!<br />
                <span className="block mt-2 text-sm text-[#FFD700]">You will receive an automatic confirmation email shortly. Please check your inbox (and spam folder).</span>
              </p>
              <button className="metal-btn" onClick={() => setDialogOpen(false)}>Close</button>
            </div>
          </div>
        )}
        <div className="flex gap-4 mt-4">
          <Link href="/" className="metal-btn">Home</Link>
          <Link href="/about" className="metal-btn">About</Link>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Your message is delivered securely and directly to Laurreev Portfolio via encrypted email.
        </p>
      </main>
    </div>
  );
}
