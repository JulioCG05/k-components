import React from "react";
import ReactDOM from "react-dom/client";
// Importamos directamente desde el punto de entrada de la lib
import { TextField } from "./src";

const App = () => {
  return (
    <div className="p-10 max-w-md mx-auto flex flex-col gap-8">
      <h1 className="text-2xl font-bold border-b pb-2">
        Prueba de Componentes
      </h1>

      {/* Probando el TextField */}
      <TextField
        label="Nombre Completo"
        placeholder="Ej. Julio Cesar"
        helperText="Ingresa tu nombre tal como aparece en tu ID"
      />

      <TextField
        label="Email"
        type="email"
        error="El formato del correo no es válido"
      />

      <TextField
        label="Campo Deshabilitado"
        disabled
        value="No puedes editar esto"
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
