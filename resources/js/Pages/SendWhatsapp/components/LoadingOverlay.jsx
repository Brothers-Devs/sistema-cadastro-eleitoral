import { CircularProgress } from "@mui/material";
import { useEffect } from "react";

const LoadingOverlay = () => {
  // if (!isVisible) return null;

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Para navegadores modernos
      return ""; // Para navegadores antigos
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-700 bg-opacity-75 z-999">
      <div className="text-center">
        <CircularProgress disableShrink />
        <h2 className="text-xl font-semibold text-white">
          Enviando mensagem...
        </h2>
        <p className="text-white">Por favor, aguarde um momento.</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
