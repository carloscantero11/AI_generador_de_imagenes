import { useState } from "react";
import NavMobile from "./NavMobile";
import Nav from "./Nav";

const ResponsiveNav = () => {
  // Estado para controlar la visibilidad del menú móvil
  const [showNav, setShowNav] = useState(false);

  // Función para abrir el menú móvil
  const openNavHandler = () => setShowNav(true);

  // Función para cerrar el menú móvil
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={openNavHandler} />
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
