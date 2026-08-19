import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 👉 href ki jagah `to` use kiya - ye actual routes/sections honge
  // "/#id" wale links Home page ke us section tak scroll karte hain
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Cars", to: "/cars" },
    { name: "Local Rental", to: "/#local-rental", noActive: true },
    { name: "Expensive Cars", to: "/#luxury-cars", noActive: true },
    { name: "Locations", to: "/#locations", noActive: true },
    { name: "Offers", to: "/#offers", noActive: true },
    { name: "About Us", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="relative z-50 w-full bg-[#06111c]">
      <nav className="w-full">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="h-[90px] flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="relative shrink-0">
              <div className="relative pt-3">
                <div className="leading-none">
                  <span className="text-[30px] font-extrabold italic text-white">
                    Drive
                  </span>
                  <span className="text-[30px] font-extrabold italic text-[#FFC400]">
                    Go
                  </span>
                </div>
                <p className="text-[8px] font-semibold tracking-[0.38em] text-white ml-1 mt-1">
                  RENT A CAR
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.to === "/" || link.to.startsWith("/#")}
                  className={({ isActive }) => {
                    const active = link.noActive ? false : isActive;
                    return `relative py-3 text-[13px] font-semibold whitespace-nowrap transition-all duration-300 group ${
                      active
                        ? "text-[#FFC400]"
                        : "text-white/90 hover:text-[#FFC400]"
                    }`;
                  }}
                >
                  {({ isActive }) => {
                    const active = link.noActive ? false : isActive;
                    return (
                      <>
                        {link.name}
                        <span
                          className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#FFC400] transition-all duration-300 ${
                            active ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </>
                    );
                  }}
                </NavLink>
              ))}
            </div>

            {/* PHONE */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFC400] flex items-center justify-center">
                <span className="text-xl text-black">☎</span>
              </div>
              <a
                href="tel:+12345678900"
                className="text-sm font-semibold text-white hover:text-[#FFC400] transition-colors"
              >
                +1 234 567 8900
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden w-11 h-11 rounded-lg border border-white/20 text-white"
            >
              {isOpen ? "×" : "☰"}
            </button>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div className="xl:hidden bg-[#071522] border-t border-white/10">
              <div className="p-5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    end={link.to === "/" || link.to.startsWith("/#")}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => {
                      const active = link.noActive ? false : isActive;
                      return `block py-4 border-b border-white/10 ${
                        active ? "text-[#FFC400]" : "text-white hover:text-[#FFC400]"
                      }`;
                    }}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;