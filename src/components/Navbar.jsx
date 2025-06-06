import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import takazokuLogo from '../assets/images/assets/takazoku.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-2">
            <img
              src={takazokuLogo}
              alt="Logo"
              className="w-10 h-10 rounded object-cover"
            />
            <span className="text-xl font-bold text-amber-500">Takazoku</span>
          </div>

          {/* Menu - Desktop */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-gray-700 hover:text-amber-500 duration-300"
            >
              Beranda
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-amber-500 duration-300"
            >
              Tentang
            </a>
            <a
              href="/activities"
              className="text-gray-700 hover:text-amber-500 duration-300"
            >
              Aktivitas
            </a>
          </div>

          {/* Hamburger - Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 pb-4">
          <a
            href="/"
            className="py-2 text-gray-700 hover:text-amber-500 duration-300"
          >
            Beranda
          </a>
          <a
            href="/about"
            className="py-2 text-gray-700 hover:text-amber-500 duration-300"
          >
            Tentang
          </a>
          <a
            href="/activities"
            className="py-2 text-gray-700 hover:text-amber-500 duration-300"
          >
            Aktivitas
          </a>
        </div>
      </div>
    </nav>
  );
}
