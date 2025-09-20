import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block py-2 px-3 rounded-md font-medium transition ${
          isActive
            ? "text-red-600"
            : "text-gray-700 hover:text-yellow-600"
        }`
      }
      onClick={() => setOpen(false)}
    >
      {children}
    </NavLink>
  );

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent"
          >
            Muhammad Abdullah
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/contact">Contact</NavItem>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-yellow-500 text-white text-sm shadow-md hover:scale-105 transition"
            >
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none hover:bg-red-50 transition"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 text-blue-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 animate-slideDown">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-yellow-500 text-white text-sm shadow-md hover:scale-105 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
