import Image from "next/image";

export default function About() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#232526] to-[#414345] fade-in">
      <main className="w-full max-w-2xl metal-card flex flex-col items-center gap-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#FFD700] drop-shadow-lg transition-colors duration-500 mb-2">About Me</h1>
        <Image
          src="/vercel.svg"
          alt="Profile"
          width={80}
          height={80}
          className="rounded-full border-4 border-[#FFD700] shadow-lg mb-4"
          priority
        />
        <p className="text-lg text-gray-300 text-center max-w-xl">
          Hi! I'm Laurreev, a passionate web developer focused on building advanced, visually stunning web experiences. I love working with modern technologies and creating beautiful, functional interfaces.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="/" className="metal-btn">Home</a>
          <a href="#contact" className="metal-btn">Contact</a>
        </div>
      </main>
    </div>
  );
}
