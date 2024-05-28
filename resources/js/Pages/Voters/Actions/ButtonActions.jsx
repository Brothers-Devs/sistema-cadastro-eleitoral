import { Box, Button, Modal, Stack, Tooltip, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Create } from "@mui/icons-material";
import { useState } from "react";
import { Notify } from "notiflix";
import { GoAlert } from "react-icons/go";
import { mask } from "remask";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: 500,
  height: 250,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
const PATTERN_CPF = ["999.999.999-99"];

export default function ButtonsActions({ params }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getRowSelectedOfLocalStorage = localStorage.getItem("rowSelected");
  const parseRowSelected = JSON.parse(getRowSelectedOfLocalStorage);

  const onClick = (_) => {
    const currentRow = params.row;
  };

  return (
    <Stack direction="row" alignItems="center" spacing={0}>
      <Tooltip title="Editar" onClick={onClick}>
        <IconButton aria-label="delete" size="medium" color="primary">
          <Create fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Deletar">
        <IconButton
          aria-label="delete"
          size="medium"
          color="error"
          onClick={handleOpen}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      {open ? (
        <ModalDelete
          handleClose={handleClose}
          open={open}
          rowId={parseRowSelected?.id}
          dataVoter={parseRowSelected}
          //   modification={modification}
          //   setModification={setModification}
        />
      ) : null}
    </Stack>
  );
}

function ModalDelete({
  handleClose,
  open,
  rowId,
  dataVoter,
  //   modification,
  //   setModification,
}) {
  function submitDeletion() {
    const promise = instance.delete(`/teams/${rowId}`);
    promise
      .then((_) => {
        setModification(!modification);
        Notify.success("Excluído com sucesso!");
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Modal
      open={open}
      keepMounted
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <GoAlert size={30} className="mr-3" color="red" />
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Excluir Eleitor
          </Typography>
        </Box>
        <Typography
          id="keep-mounted-modal-description"
          variant="subtitle1"
          component="h2"
          sx={{ mt: 2, textAlign: "center" }}
        >
          {`Tem certeza que deseja excluir o eleitor ${
            dataVoter.row.name
          } de CPF: ${mask(dataVoter.row.cpf, PATTERN_CPF)} ?`}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={4} sx={{ mt: 5 }}>
          <Button
            color="success"
            size="large"
            variant="outlined"
            sx={{ borderRadius: 20, width: 100 }}
            // onClick={submitDeletion}
          >
            Excluir
          </Button>
          <Button
            color="warning"
            size="large"
            variant="outlined"
            sx={{ borderRadius: 20, width: 100 }}
            onClick={handleClose}
          >
            Cancelar
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
