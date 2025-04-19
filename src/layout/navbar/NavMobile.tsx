import React from "react";
import { navLinks } from "../../../data/dataHome";
import { Link } from "react-router-dom";
import { CircleX } from "lucide-react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const NavMobile = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-y-0" : "translate-y-[-200%]";

  return (
    <div>
      {/* NavLinks */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-screen transform transition-all duration-1000 w-full nav-blur-mobile space-y-6 z-[1050] top-0`}
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.id} to={link.url} className="mx-auto">
              <p className="text-gray-950 w-fit text-[26px] border-b-[3px]  border-blue-700 sm:text-[30px] mt-2">
                {link.label}
              </p>
            </Link>
          );
        })}

        {/* Ícono para cerrar el menú */}
        <CircleX
          onClick={closeNav}
          className=" mx-auto mt-[6rem] right-[1.4rem] sm:w-8 sm:h-8 w-18 h-18 animate-glow "
        />
      </div>
    </div>
  );
};

export default NavMobile;
