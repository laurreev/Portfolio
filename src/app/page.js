
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#232526] to-[#414345] fade-in">
      <main className="w-full max-w-3xl metal-card flex flex-col items-center gap-8 shadow-xl">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/vercel.svg"
            alt="Logo"
            width={64}
            height={64}
            className="drop-shadow-lg"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#FFD700] drop-shadow-lg transition-colors duration-500">Laurreev</h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium mt-2 text-center max-w-xl">Building advanced web experiences with a passion for design, code, and innovation.</p>
        </div>
        <div className="flex gap-4 mt-4">
          <a href="#projects" className="metal-btn">View Projects</a>
          <a href="#contact" className="metal-btn">Contact</a>
        </div>
      </main>
      <section id="projects" className="w-full max-w-3xl mt-16 fade-in">
        <h2 className="text-2xl font-semibold text-[#FFD700] mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="metal-card">
            <h3 className="text-xl font-bold mb-2 text-[#FFD700]">Project One</h3>
            <p className="text-gray-300 mb-2">A showcase of a modern, animated portfolio project with a dark metal theme.</p>
            <a href="#" className="metal-btn">View</a>
          </div>
          <div className="metal-card">
            <h3 className="text-xl font-bold mb-2 text-[#FFD700]">Project Two</h3>
            <p className="text-gray-300 mb-2">Another example project with professional transitions and a sleek look.</p>
            <a href="#" className="metal-btn">View</a>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full max-w-3xl mt-16 fade-in">
        <h2 className="text-2xl font-semibold text-[#FFD700] mb-6">Contact</h2>
        <form className="metal-card flex flex-col gap-4">
          <input className="p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all" type="text" placeholder="Your Name" required />
          <input className="p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all" type="email" placeholder="Your Email" required />
          <textarea className="p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all" placeholder="Your Message" rows={4} required />
          <button type="submit" className="metal-btn self-end">Send</button>
        </form>
      </section>
      <footer className="mt-20 text-gray-500 text-sm text-center fade-in">
        &copy; {new Date().getFullYear()} Laurreev. All rights reserved.
      </footer>
    </div>
  );
}
