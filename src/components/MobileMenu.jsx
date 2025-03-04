import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function MobileMenu({ menuOpen, setMenuOpen }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "skills",
        "qualifications",
        "projects",
        "contact",
      ];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          if (top < window.innerHeight / 2 && top + height > 0) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-40 flex flex-col justify-center items-center transition duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
      >
        &times;
      </button>
      <ul className="flex flex-col items-center space-y-6">
        {["home", "skills", "qualifications", "projects", "contact"].map(
          (section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className={`cursor-pointer text-lg font-bold border-b-2 transition-transform ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                } ${
                  activeSection === section
                    ? "text-red-500 border-red-500"
                    : "hover:border-red-500 border-transparent"
                } `}
              >
                {section.toUpperCase()}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default MobileMenu;
