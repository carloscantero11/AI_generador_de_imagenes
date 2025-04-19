const Footer = () => {
  // Función para hacer scroll suave a un id
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#fce3ff] to-[#cde9f5] text-zinc-900 pt-12 pb-8 shadow-inner">
      {/* Título */}
      <div className="text-center text-[27px] md:text-5xl font-semibold mb-6 bg-gradient-to-b from-blue-700  to-fuchsia-600 md:h-[55px] bg-clip-text text-transparent">
        Generador de Imágenes IA
      </div>

      {/* Divisipión */}
      <div className="w-[85%] lg:w-[75%] mx-auto mt-7 mb-10 rounded-full bg-gradient-to-b from-blue-700  to-fuchsia-600 h-1 bg-clip-border border-transparent"></div>

      {/* Contenido */}
      <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mt-12 mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Navegación */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-2xl md:text-3xl text-zinc-900 mb-3">
            Navegación
          </h3>
          <ul className="space-y-2 text-zinc-600">
            <li>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="nav__link text-lg text-zinc-700 mx-auto mt-6"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToId("galeria")}
                className="nav__link text-lg text-zinc-700 mx-auto mt-6"
              >
                Galería
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToId("sobreNosotros")}
                className="nav__link text-lg text-zinc-700 mx-auto mt-6"
              >
                Sobre Nosotros
              </button>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-2xl md:text-3xl text-zinc-900 mb-3">
            Contacto
          </h3>
          <ul className="space-y-2 text-base text-zinc-700 font-semibold">
            <li className="mt-6 mx-auto">carlitos.mcs18@gmail.com</li>
            <li className="mt-6 mx-auto">+58 412-140-1685</li>
          </ul>
        </div>
      </div>

      {/* División */}
      <div className="w-[85%] lg:w-[75%] mx-auto mt-13 mb-10 rounded-full bg-gradient-to-b from-blue-700  to-fuchsia-600 h-1 bg-clip-border border-transparent"></div>

      {/* Créditos */}
      <p className="text-center text-sm md:text-base text-zinc-600">
        &copy; 2025 KarmaDev. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
