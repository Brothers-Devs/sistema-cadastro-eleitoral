import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { IoCloudUpload } from "react-icons/io5";

export const FormMedia = ({ setFile }) => {
  const onDrop = useCallback((file) => {
    setFile(file[0]);
  }, []);

  const dropzone = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
      "video/*": [".mp4"],
    },
  });

  return (
    <div
      {...dropzone.getRootProps()}
      className={`w-full h-45 bg-slate-300 rounded-lg border-dashed border-2 hover:border-slate-700 ${
        dropzone.isDragActive ? "border-blue-500" : "border-slate-400"
      }`}
    >
      <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
        <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
          <IoCloudUpload
            className={`w-10 h-10 mb-3 ${
              dropzone.isDragActive ? "text-blue-500" : "text-slate-400"
            }`}
          />
          {dropzone.isDragActive ? (
            <p className="font-bold text-blue-400">Soltar para adicionar</p>
          ) : (
            <>
              <p className="mb-2 text-lg text-slate-500">
                <span className="font-bold">Clique para enviar</span> ou arraste
                até aqui.
              </p>
              <p className="text-slate-500 text-sm">
                Mídia |{" "}
                <span className="font-bold text-red-800">imagem ou vídeo </span>{" "}
              </p>
            </>
          )}
        </div>
      </label>
      <input {...dropzone.getInputProps()} className="hidden" />
    </div>
  );
};
