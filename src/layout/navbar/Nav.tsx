import React, { useEffect, useState } from "react";
import { navLinks } from "../../../data/dataHome";
import { MenuIcon } from "lucide-react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBackgroung, setNavBackground] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBackground(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const bg_style = navBackgroung ? "nav-blur shadow-xl" : "";

  return (
    <div
      className={`flex ${bg_style} items-center justify-between h-[70px] fixed z-[100] w-full mx-auto transition-all duration-200`}
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Logo"
        className="w-15 h-auto ml-8 md:ml-16" // Ajusta el tamaño si es necesario
      />

      <div className="md:flex items-center space-x-10 hidden">
        {/* NavLinks */}
        {navLinks.map((link) => {
          return (
            <a key={link.id} href={link.url} className="nav__link">
              <p>{link.label}</p>
            </a>
          );
        })}
      </div>

      {/* Botón */}
      
      <div className="flex items-center space-x-5 text-blue-950 mr-8 md:mr-16">
        {/*<ShoppingCart className="cursor-pointer w-8 h-8" />
        <Search className="cursor-pointer w-8 h-8" />*/}
        <MenuIcon
          onClick={openNav}
          className="cursor-pointer w-8 h-8 md:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
