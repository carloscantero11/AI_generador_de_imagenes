import { ReactNode } from "react";
import ResponsiveNav from "./navbar/ResponsiveNav";

// Tipo de las props que acepta el layout (debe recibir contenido hijo)
type LayoutProps = {
  children: ReactNode;
};

// Componente layout general de la app
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-principal">
      <ResponsiveNav />
      <main> {children} </main>
    </div>
  );
}
