export default function Contact() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#232526] to-[#414345] fade-in">
      <main className="w-full max-w-xl metal-card flex flex-col items-center gap-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#FFD700] drop-shadow-lg transition-colors duration-500 mb-2">Contact</h1>
        <form className="w-full flex flex-col gap-4">
          <input className="p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all" type="text" placeholder="Your Name" required />
          <input className="p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all" type="email" placeholder="Your Email" required />
          <textarea className="p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all" placeholder="Your Message" rows={4} required />
          <button type="submit" className="metal-btn self-end">Send</button>
        </form>
        <div className="flex gap-4 mt-4">
          <a href="/" className="metal-btn">Home</a>
          <a href="/about" className="metal-btn">About</a>
        </div>
      </main>
    </div>
  );
}
