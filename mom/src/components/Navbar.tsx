import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const leftNavItems = ["Services", "About"];
const rightNavItems = ["Our work", "Latest", "Contact"];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="relative group px-4 py-2 rounded-full bg-gradient-to-r from-transparent via-black/5 to-transparent 
                 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-black/90 before:via-black before:to-black/90
                 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 overflow-hidden"
    >
      <span className="relative z-10 transition-colors duration-500 text-black group-hover:text-white">
        {children}
      </span>
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full transition-all ${
          scrolled ? "bg-white py-2" : "bg-white py-3"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Left Navigation (desktop): About & Services left-aligned */}
          <div className="flex-1 flex items-center">
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              {leftNavItems.map((item) => (
                <NavLink
                  key={item}
                  href={
                    item === "Services"
                      ? "/services"
                      : item === "About"
                        ? "/about"
                        : `#${item.toLowerCase()}`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Center: GENVSTUDIOS (desktop, not homepage) */}
          <div className="flex-1 flex justify-center md:justify-center">
            {pathname !== '/' && (
              <Link href="/" className="font-bold text-black text-lg md:text-2xl tracking-wide md:tracking-widest md:uppercase md:font-extrabold md:font-bricolage md:block text-center md:mx-auto">
                GENVSTUDIOS
              </Link>
            )}
            {/* Always show on mobile */}
            <span className="md:hidden font-bold text-black text-lg">GENVSTUDIOS</span>
          </div>

          {/* Right Navigation (desktop) */}
          <nav className="hidden md:flex gap-6 text-sm font-medium ml-auto">
            {rightNavItems.map((item) => (
              <NavLink
                key={item}
                href={
                  item === "Contact"
                    ? "/contact"
                    : `#${item.toLowerCase().replace(" ", "-")}`
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger (mobile) */}
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2">
            <HiMenu className="text-xl text-black" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8 text-xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 text-3xl text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              <HiX />
            </button>
            <div className="flex flex-col items-center gap-8">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <div key={item} onClick={() => setIsMenuOpen(false)}>
                  <NavLink
                    href={
                      item === "Home"
                        ? "/"
                        : item === "Services"
                          ? "/services"
                          : item === "About"
                            ? "/about"
                            : item === "Contact"
                              ? "/contact"
                              : `#${item.toLowerCase().replace(" ", "-")}`
                    }
                  >
                    {item}
                  </NavLink>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
