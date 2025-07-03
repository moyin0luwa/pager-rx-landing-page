export default function Header() {
  return (
    <header className="bg-[#f0f6fb] text-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="text-xl font-bold tracking-tight">
          Pager<span className="text-cyan-500">RX</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#features" className="hover:text-cyan-500 transition">Features</a>
          <a href="#how-it-works" className="hover:text-cyan-500 transition">How It Works</a>
          <a href="#trust" className="hover:text-cyan-500 transition">Why Trust Us</a>
        </nav>

        {/* Call to Action */}
        <div className="hidden md:block">
          <a
            href="#features"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow"
          >
            Try Pager-RX
          </a>
        </div>
      </div>
    </header>
  );
}
