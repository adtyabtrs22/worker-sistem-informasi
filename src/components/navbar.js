import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto">
        <div className="bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20">
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-120 h-15">
                <Image
                  src="/logo/logo.png"
                  alt="Sistem Informasi Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <Link
                href="/"
                onClick={() => handleLinkClick("home")}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeLink === "home"
                    ? "text-orange-600 bg-orange-50 shadow-sm"
                    : "text-gray-600 hover:text-orange-600 hover:bg-gray-50"
                }`}
              >
                Home
                {activeLink === "home" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full"></div>
                )}
              </Link>

              <Link
                href="/"
                onClick={() => handleLinkClick("about")}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeLink === "about"
                    ? "text-orange-600 bg-orange-50 shadow-sm"
                    : "text-gray-600 hover:text-orange-600 hover:bg-gray-50"
                }`}
              >
                About
                {activeLink === "about" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full"></div>
                )}
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100">
              <div className="px-4 py-3 space-y-1">
                <Link
                  href="/"
                  onClick={() => handleLinkClick("home")}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeLink === "home"
                      ? "text-blue-600 bg-blue-50 shadow-sm"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/"
                  onClick={() => handleLinkClick("about")}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeLink === "about"
                      ? "text-blue-600 bg-blue-50 shadow-sm"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
