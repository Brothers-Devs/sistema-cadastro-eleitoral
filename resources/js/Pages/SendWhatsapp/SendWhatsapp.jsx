import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import DefaultLayout from "@/Layouts/DefaultLayout";
import {
  Autocomplete,
  Box,
  Divider,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { mask } from "remask";
import { HasFile } from "./components/HasFile";
import { FormMedia } from "./components/FormMedia";
import { router } from "@inertiajs/react";
import { Notify } from "notiflix";
import ProgressBar from "@ramonak/react-progress-bar";
import LoadingOverlay from "./components/LoadingOverlay";

const PATTERN_CPF = ["999.999.999-99"];

export default function SendWhatsapp({ leaders }) {
  const [leaderSelected, setLeaderSelected] = useState({
    id: "",
    name: "",
    cpf: "",
    created_at: "",
    updated_at: "",
    nameWithCpf: "",
  });
  const [textMessage, setTextMessage] = useState("");
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [sendMessage, setSendMessage] = useState(false);
  const removeFile = useCallback(() => {
    setFile(null);
    setTextMessage("");
  }, [file]);

  const handleClearInputLeader = () => {
    setLeaderSelected({});
    setTextMessage("");
    removeFile();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSendMessage(true);

    const payloadMessage = {
      leader_id: leaderSelected?.id,
      media_type: file.type.split("/")[0],
      text_message: textMessage,
      media: file,
    };

    router.post("/messages/send-media", payloadMessage, {
      onProgress: (progressEvent) => {
        if (progressEvent.lengthComputable) {
          const percentComplete = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setProgress(percentComplete);
        }
      },
      onSuccess: () => {
        Notify.success("Mensagem enviada com sucesso!");
        setLeaderSelected({
          id: "",
          name: "",
          cpf: "",
          created_at: "",
          updated_at: "",
          nameWithCpf: "",
        });
        setSendMessage(false);
        setIsLoading(false);
        removeFile();
        setProgress(0);
      },
      onError: (e) => {
        Notify.failure(e?.media);
        removeFile();
        setIsLoading(false);
        setSendMessage(false);
        setProgress(0);
      },
      onFinish: () => {
        setLeaderSelected({
          id: "",
          name: "",
          cpf: "",
          created_at: "",
          updated_at: "",
          nameWithCpf: "",
        });
        removeFile();
        setIsLoading(false);
        setSendMessage(false);
        setProgress(0);
      },
    });
  };

  const VotersOfLeaderSelected = leaders?.map((leader) => {
    return {
      ...leader,
      nameWithCpf: `${leader.name} (${mask(leader.cpf, PATTERN_CPF)})`,
    };
  });

  function handleOnChange(value) {
    setLeaderSelected({ ...value });
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName={"Enviar Pelo Whatsapp"} />
      <Divider variant="fullWidth" />
      <div className="mt-5 h-full w-full bg-white p-8 shadow-6">
        <Box
          sx={{
            marginTop: 3,
            width: 500,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Selecione a Liderança*
          </Typography>
          <FormControl required sx={{ width: 400 }}>
            <Autocomplete
              clearIcon={
                <IconButton onClick={handleClearInputLeader}>
                  <ClearIcon />
                </IconButton>
              }
              value={leaderSelected}
              onChange={(_, newValue) => {
                handleOnChange(newValue);
              }}
              id="leader"
              options={VotersOfLeaderSelected}
              renderInput={(params) => <TextField {...params} />}
              getOptionLabel={(option) =>
                option.name ? option.nameWithCpf : ""
              }
            />
            <p className="mt-3 text-orange-600 text-xs font-semibold">
              OBS: SELECIONE UMA LIDERANÇA PARA ENVIAR A MENSAGEM PARA TODOS OS
              ELEITORES CADASTRADO DESSA LIDERANÇA.
            </p>
          </FormControl>
        </Box>
        {leaderSelected.name ? (
          <Grid
            item
            xs={10}
            sm={8}
            md={6}
            sx={{
              marginTop: 3,
              maxWidth: 500,
              p: 5,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              border: "2px solid #7f7f7f",
            }}
          >
            {!file ? (
              <FormMedia setFile={setFile} />
            ) : (
              <>
                <HasFile
                  file={file}
                  removeFile={removeFile}
                  textMessage={textMessage}
                  setTextMessage={setTextMessage}
                  handleSubmit={handleSubmit}
                  leaderSelected={leaderSelected}
                  sendMessage={sendMessage}
                />
                {sendMessage && (
                  <ProgressBar
                    completed={progress}
                    bgColor="#3b82f6"
                    height="20px"
                    labelColor="#fff"
                    labelAlignment="center"
                  />
                )}
              </>
            )}
          </Grid>
        ) : null}
      </div>
      <LoadingOverlay isVisible={sendMessage} />
    </DefaultLayout>
  );
}
