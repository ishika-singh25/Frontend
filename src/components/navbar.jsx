export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-extrabold text-grocify-green">
          Grocify
        </a>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-gray-600 hover:text-grocify-green transition duration-200"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-grocify-green transition duration-200"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-grocify-green transition duration-200"
          >
            About
          </a>
        </nav>

        <a
          href="#"
          className="px-5 py-2 bg-grocify-green text-white font-medium rounded-xl shadow-lg hover:bg-emerald-700 transition duration-300 transform hover:scale-[1.02]"
        >
          Get Started Free
        </a>
      </div>
    </header>
  );
}
