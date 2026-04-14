import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["hero", "about", "services", "testimonials", "faq"];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);

        if (section) {
          const sectionTop = section.offsetTop;

          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "faq", label: "FAQ" },
  ];

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full backdrop-blur-xl border-b border-gray-200/50 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-sm" : "bg-white/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">

          <span className="font-semibold text-base tracking-tighter text-black uppercase">
             <img src={logo} className="w-32 h-32 object-contain" alt="Logo" />
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-elem relative text-sm transition-all font-semibold text-blue-900 duration-300 ${
                activeSection === link.id
                  ? "text-[#0b3661] font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {link.label}

              {activeSection === link.id && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-900 rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-black text-2xl"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          <iconify-icon
            icon={isMobileMenuOpen ? "solar:close-square-linear" : "solar:hamburger-menu-linear"}
          ></iconify-icon>
        </button>
      </div>

      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white/95 border-t border-gray-200/50 shadow-sm`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleNavLinkClick}
              className={`nav-elem text-base transition-colors duration-200 ${
                activeSection === link.id ? "text-black font-semibold" : "text-gray-600 hover:text-black"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
