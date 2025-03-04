import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full md:flex justify-center items-center py-4 px-6 z-40 bg-transparent">
      <Navbar/>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(true)} className="fixed right-6 top-6 text-white text-3xl focus:outline-none cursor-pointer">
          <FaBars/>
        </button>
      </div>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </header>
  );
}

export default Header;
