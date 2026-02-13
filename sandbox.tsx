import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
// Importamos directamente desde el punto de entrada de la lib
import { TextField } from "./src";
import { Sidebar, SidebarItem } from "./src";

const App = () => {
  const [open, setOpen] = useState(true);
  return (
    // <div className="p-10 max-w-md mx-auto flex flex-col gap-8">
    //   <h1 className="text-2xl font-bold border-b pb-2">
    //     Prueba de Componentes
    //   </h1>

    //   {/* Probando el TextField */}
    //   <TextField
    //     label="Nombre Completo"
    //     placeholder="Ej. Julio Cesar"
    //     helperText="Ingresa tu nombre tal como aparece en tu ID"
    //   />

    //   <TextField
    //     label="Email"
    //     type="email"
    //     error="El formato del correo no es válido"
    //   />

    //   <TextField
    //     label="Campo Deshabilitado"
    //     disabled
    //     value="No puedes editar esto"
    //   />
    // </div>
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={open} onClose={() => setOpen(false)}>
        <SidebarItem label="Dashboard" active />
        <SidebarItem label="Usuarios" />
        <SidebarItem label="Configuración" />
      </Sidebar>

      <main className="flex-1 p-10">
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 bg-blue-600 text-white rounded mb-4"
        >
          Menu
        </button>
        <h1 className="text-2xl font-bold text-gray-800">
          Contenido Principal
        </h1>
      </main>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
