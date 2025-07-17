export default function Projects() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#232526] to-[#414345] fade-in">
      <main className="w-full max-w-3xl metal-card flex flex-col items-center gap-8 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#FFD700] drop-shadow-lg transition-colors duration-500 mb-2">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
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
        <div className="flex gap-4 mt-4">
          <a href="/" className="metal-btn">Home</a>
          <a href="/about" className="metal-btn">About</a>
        </div>
      </main>
    </div>
  );
}
