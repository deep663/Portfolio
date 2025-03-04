import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "qualifications", "projects", "contact"];
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
    <nav className="hidden md:flex bg-black/60 z-40 py-4 shadow-md rounded-full">
      <ul className="mx-8 flex justify-center space-x-6">
        {["home", "skills", "qualifications", "projects", "contact"].map((section) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              className={`cursor-pointer text-lg border-b-2 transition ${
                activeSection === section ? "text-red-500 font-bold border-red-500" : "text-white hover:border-red-500 border-transparent"
              }`}
            >
              {section.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
