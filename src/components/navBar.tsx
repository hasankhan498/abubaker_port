

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "Team",
    "Portfolio",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 lg:px-8 py-4">
      <div
        className="
          max-w-7xl
          mx-auto
          h-16
          px-6
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-[#021330]/80
          backdrop-blur-xl
          shadow-xl
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div
            className="
              h-10
              w-10
              rounded-xl
              bg-gradient-to-br
              from-green-400
              to-green-500
              flex
              items-center
              justify-center
              font-bold
              text-[#021330]
              shadow-lg
              shadow-green-500/30
            "
          >
            W
          </div>

          <h1 className="text-xl font-bold text-white">
            Web<span className="text-green-400">glock</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul
            className="
              flex
              items-center
              gap-2
              bg-white/5
              border
              border-white/10
              rounded-full
              p-2
              backdrop-blur-xl
            "
          >
            {navLinks.map((link) => (
              <li key={link}>
                <NavLink
                onClick={()=>{
                      window.scrollTo({
                        top:0,
                        behavior:"smooth"
                      })
                    }}
                  to={
                    link === "Home"
                      ? "/"
                      : `/${link.toLowerCase()}`
                  }
                  className={({ isActive }) =>
                    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-green-400 text-[#021330] shadow-lg shadow-green-500/30"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <NavLink
          to={'/contact'}
            className="
              glow-btn
              bg-green-400
              text-[#021330]
              font-semibold
              px-6
              py-3
              rounded-full
              transition-all
              duration-300
              hover:scale-105
              shadow-lg
              shadow-green-500/20
            "
            onClick={()=>{
                      window.scrollTo({
                        top:0,
                        behavior:"smooth"
                      })
                    }}
          >
            Get a Quote
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            mt-3
            max-w-7xl
            mx-auto
            bg-[#021330]/95
            backdrop-blur-xl
            border
            border-white/10
            rounded-2xl
            p-4
          "
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link}
                to={
                  link === "Home"
                    ? "/"
                    : `/${link.toLowerCase()}`
                }
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-green-400 text-[#021330] font-semibold"
                      : "text-slate-300 hover:bg-white/10"
                  }`
                }
              >
                {link}
              </NavLink>
            ))}

            <button
              className="
                glow-btn
                bg-green-400
                text-[#021330]
                font-semibold
                py-3
                rounded-xl
                mt-2
              "
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;