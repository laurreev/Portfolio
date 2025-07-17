import React from "react";

export default function Skills() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#232526] to-[#414345] fade-in">
      <main className="w-full max-w-2xl metal-card flex flex-col items-center gap-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#FFD700] drop-shadow-lg mb-2">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
          <div className="metal-card flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="text-2xl">💻</span>
            <span className="mt-2 text-[#FFD700] font-semibold">JavaScript</span>
          </div>
          <div className="metal-card flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="text-2xl">⚛️</span>
            <span className="mt-2 text-[#FFD700] font-semibold">React</span>
          </div>
          <div className="metal-card flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="text-2xl">🌐</span>
            <span className="mt-2 text-[#FFD700] font-semibold">Next.js</span>
          </div>
          <div className="metal-card flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="text-2xl">🎨</span>
            <span className="mt-2 text-[#FFD700] font-semibold">Tailwind CSS</span>
          </div>
          <div className="metal-card flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="text-2xl">☁️</span>
            <span className="mt-2 text-[#FFD700] font-semibold">Vercel</span>
          </div>
          <div className="metal-card flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="text-2xl">🔒</span>
            <span className="mt-2 text-[#FFD700] font-semibold">Security</span>
          </div>
        </div>
      </main>
    </div>
  );
}
