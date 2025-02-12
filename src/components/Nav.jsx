import { useState } from "react";
import { Menu } from "lucide-react";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation Menu */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 bg-white text-gray-800 py-4 px-5 border border-gray-300 rounded-lg shadow-lg hidden md:block">
        <h2 className="text-lg font-semibold text-gray-700 text-center mb-3">Navigate</h2>
        <ul className="space-y-3">
          <li>
            <a href="#attention-economy" className="block hover:text-blue-600 transition">
              What are Algorithms?
            </a>
          </li>
          <li>
            <a href="#what-we-can-do" className="block hover:text-blue-600 transition">
              What Can We Do?
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 md:hidden bg-gray-800 text-white p-2 rounded-md shadow-md"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-2/3 h-full bg-slate-900 text-white p-6 shadow-lg flex flex-col">
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-xl font-bold"
          >
            ✕
          </button>
          <h2 className="text-lg font-semibold mt-4">Navigate</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#what-are-algos" onClick={() => setMenuOpen(false)} className="block hover:text-gray-300 transition">
                What are Algorithms?
              </a>
            </li>
            <li>
              <a href="#engagement-algorithms" onClick={() => setMenuOpen(false)} className="block hover:text-gray-300 transition">
                Engagement Algorithms
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;

  
