import Link from "next/link";

export default function Projects() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#232526] to-[#414345] fade-in">
      <main className="w-full max-w-3xl metal-card flex flex-col items-center gap-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#FFD700] drop-shadow-lg transition-colors duration-500 mb-2">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
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
        <div className="flex gap-4 mt-4">
          <Link href="/" className="metal-btn">Home</Link>
          <Link href="/about" className="metal-btn">About</Link>
        </div>
      </main>
    </div>
  );
}
