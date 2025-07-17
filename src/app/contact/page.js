import Link from "next/link";

export default function Contact() {
  // Replace the action URL below with your Formspree endpoint after signup
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#232526] to-[#414345] fade-in">
      <main className="w-full max-w-xl metal-card flex flex-col items-center gap-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#FFD700] drop-shadow-lg transition-colors duration-500 mb-2">Contact</h1>
        <form className="w-full flex flex-col gap-4" action="https://formspree.io/f/mvgqgzgl" method="POST">
          <label className="flex flex-col gap-1 text-gray-200">
            Your email:
            <input name="email" type="email" className="p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300 hover:scale-[1.03]" placeholder="Your Email" required />
          </label>
          <label className="flex flex-col gap-1 text-gray-200">
            Your message:
            <textarea name="message" className="p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300 hover:scale-[1.03]" placeholder="Your Message" rows={4} required />
          </label>
          {/* Add more fields here if needed */}
          <button type="submit" className="metal-btn self-end transition-transform duration-300 hover:scale-105 hover:shadow-2xl">Send</button>
        </form>
        <div className="flex gap-4 mt-4">
          <Link href="/" className="metal-btn">Home</Link>
          <Link href="/about" className="metal-btn">About</Link>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          This form uses{' '}
          <a
            href="https://formspree.io"
            className="underline text-[#FFD700] hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Formspree
          </a>{' '}
          for email delivery. Replace the action URL with your Formspree endpoint.
        </p>
      </main>
    </div>
  );
}
