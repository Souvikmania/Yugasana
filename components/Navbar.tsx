export default function Navbar() {
  return (
    <header className="absolute top-6 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-full px-8 py-4 flex items-center justify-between shadow">
          
          <div className="text-xl font-semibold">YuGa</div>

          <nav className="hidden md:flex gap-8 text-sm text-textDark">
            <a>Features</a>
            <a>Solutions</a>
            <a>About</a>
            <a>Pricing</a>
          </nav>

          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm rounded-full bg-black text-white">
              Talk To Sales
            </button>
            <button className="px-4 py-2 text-sm rounded-full border">
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
