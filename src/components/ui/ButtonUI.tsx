// Botón de "Crear" con estilos y evento onClick
type ButtonProps = {
  onClick?: () => void; // Función a ejecutar al hacer clic
};

const ButtonUI = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-30 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:scale-105 duration-200 hover:drop-shadow-md hover:shadow-[#44e9ff] hover:cursor-pointer"
    >
      Crear 🪄
    </button>
  );
};

export default ButtonUI;
