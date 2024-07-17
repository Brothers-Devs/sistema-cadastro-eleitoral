import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { IoClose } from "react-icons/io5";
import { FaFile } from "react-icons/fa6";
import { CircularProgress, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

export const HasFile = ({
  file,
  removeFile,
  textMessage,
  setTextMessage,
  handleSubmit,
  leaderSelected,
  sendMessage,
}) => {
  return (
    <>
      <div className="relative w-full h-45 bg-slate-300 rounded-lg border-dashed border-2 hover:border-slate-700 flex justify-center items-center flex-col">
        <div className="bg-white pl-4 pr-4 rounded-md shadow-md flex gap-3 items-center justify-center z-1">
          <FaFile size={20} />
          <span className="text-sm text-slate-600 my-4 flex-wrap">
            {file?.name}
          </span>
          <Tooltip title="Remover Arquivo">
            <button
              type="button"
              onClick={sendMessage ? () => "" : removeFile}
              className="place-self-start mt-1 p-1"
            >
              <IoClose className="w-5 h-5" />
            </button>
          </Tooltip>
        </div>
      </div>
      <InputLabel
        htmlFor="description"
        value="Descrição da Mídia (Opcional)"
        className="mt-5 mb-2.5 block text-black dark:text-white"
      />

      <textarea
        id="msg"
        name="msg"
        rows="3"
        cols="50"
        placeholder="Descrição da Mídia"
        value={textMessage}
        onChange={(e) => setTextMessage(e.target.value)}
        className="w-full rounded-lg border-[1.5px] bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
      ></textarea>
      <div className="flex items-center w-full flex-col">
        <PrimaryButton
          name="button-send-message"
          disabled={sendMessage}
          onClick={handleSubmit}
          className={`bg-green-600 text-slate-50 hover:bg-green-500 mt-10 mb-5 h-11 ${
            sendMessage ? "flex items-center justify-center w-40" : ""
          }`}
        >
          {sendMessage ? (
            <CircularProgress
              disableShrink
              sx={{
                color: "#000203",
                opacity: sendMessage ? 1 : 0.5,
              }}
            />
          ) : (
            "Enviar Mensagem"
          )}
        </PrimaryButton>
        <p className=" text-orange-600 text-sm font-semibold">
          OBS: A MENSAGEM SERÁ ENVIADO PARA OS ELEITORES CADASTRADOS NO SISTEMA
          POR ESSA LIDERANÇA QUE VOCÊ ESCOLHEU.
        </p>
      </div>
    </>
  );
};
