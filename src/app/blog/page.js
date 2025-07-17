import React from "react";

export default function Blog() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#232526] to-[#414345] fade-in">
      <main className="w-full max-w-2xl metal-card flex flex-col items-center gap-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#FFD700] drop-shadow-lg mb-2">Blog</h1>
        <div className="w-full flex flex-col gap-6">
          <div className="metal-card p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-lg font-bold text-[#FFD700] mb-2">Welcome to My Blog</h3>
            <p className="text-gray-300">Coming soon: Articles on web development, design, and more!</p>
          </div>
        </div>
      </main>
    </div>
  );
}
