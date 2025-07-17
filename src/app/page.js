
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-4 bg-gradient-to-br from-[#232526] to-[#414345] fade-in">
      <main className="w-full max-w-3xl metal-card flex flex-col items-center gap-6 sm:gap-8 shadow-xl p-4 sm:p-8">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <Image
            src="/vercel.svg"
            alt="Logo"
            width={56}
            height={56}
            className="drop-shadow-lg"
            priority
          />
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFD700] drop-shadow-lg transition-colors duration-500 text-center">Laurreev</h1>
          <p className="text-base xs:text-lg sm:text-xl text-gray-300 font-medium mt-2 text-center max-w-xs sm:max-w-xl">Building advanced web experiences with a passion for design, code, and innovation.</p>
        </div>
        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 mt-4 w-full justify-center">
          <a href="#projects" className="metal-btn w-full xs:w-auto">View Projects</a>
          <a href="#contact" className="metal-btn w-full xs:w-auto">Contact</a>
        </div>
      </main>
      <section id="projects" className="w-full max-w-3xl mt-10 sm:mt-16 fade-in px-1 xs:px-0">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#FFD700] mb-4 sm:mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="metal-card flex flex-col h-full justify-between p-6 shadow-lg">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#FFD700]">Project One</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">A showcase of a modern, animated portfolio project with a dark metal theme.</p>
            </div>
            <div className="flex justify-end">
              <a href="#" className="metal-btn px-6 py-2 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-xl">View</a>
            </div>
          </div>
          <div className="metal-card flex flex-col h-full justify-between p-6 shadow-lg">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#FFD700]">Project Two</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">Another example project with professional transitions and a sleek look.</p>
            </div>
            <div className="flex justify-end">
              <a href="#" className="metal-btn px-6 py-2 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-xl">View</a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full max-w-3xl mt-10 sm:mt-16 fade-in px-1 xs:px-0">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#FFD700] mb-4 sm:mb-6 text-center">Contact</h2>
        <form className="metal-card flex flex-col gap-3 sm:gap-4">
          <input className="p-2 sm:p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all text-sm sm:text-base" type="text" placeholder="Your Name" required />
          <input className="p-2 sm:p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all text-sm sm:text-base" type="email" placeholder="Your Email" required />
          <textarea className="p-2 sm:p-3 rounded bg-[#232526] text-gray-200 border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all text-sm sm:text-base" placeholder="Your Message" rows={4} required />
          <button type="submit" className="metal-btn self-end w-full xs:w-auto">Send</button>
        </form>
      </section>
      <footer className="mt-10 sm:mt-20 text-gray-500 text-xs sm:text-sm text-center fade-in px-2">
        &copy; {new Date().getFullYear()} Laurreev. All rights reserved.
      </footer>
    </div>
  );
}
