import { Box, Button, Modal, Stack, Tooltip, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Create } from "@mui/icons-material";
import { useState } from "react";
import { GoAlert } from "react-icons/go";
import { mask } from "remask";
import { Inertia } from "@inertiajs/inertia";
import { router } from "@inertiajs/react";
import { toast } from "react-toastify";
import ModalUltis from "@/Utils/ModalUtils";
import { Notify } from "notiflix";

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

export default function ButtonsActions({
  handleEdit,
  _,
  setOpenModalEdit,
  modification,
  setModification,
}) {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleOpenModalDelete = () => setOpenModalDelete(true);
  const handleCloseModalDelete = () => setOpenModalDelete(false);

  const getRowSelectedOfLocalStorage = localStorage.getItem("rowSelected");
  const parseRowSelected = JSON.parse(getRowSelectedOfLocalStorage);

  return (
    <Stack direction="row" alignItems="center" spacing={0}>
      <Tooltip title="Editar">
        <IconButton
          aria-label="edit"
          size="medium"
          color="primary"
          onClick={() => {
            setOpenModalEdit(true);
            handleEdit(parseRowSelected?.row);
          }}
        >
          <Create fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Deletar">
        <IconButton
          aria-label="delete"
          size="medium"
          color="error"
          onClick={handleOpenModalDelete}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      {openModalDelete ? (
        <ModalDelete
          handleClose={handleCloseModalDelete}
          open={openModalDelete}
          rowId={parseRowSelected?.id}
          dataVoter={parseRowSelected}
          modification={modification}
          setModification={setModification}
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
  modification,
  setModification,
}) {
  function submitDeletion() {
    router.delete(`/voters/${rowId}`, {
      onSuccess: () => {
        setModification(!modification);
        Notify.success("Eleitor excluido com sucesso!");
      },
      onError: () => {
        Notify.failure("Falha ao excluir eleitor!");
      },
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
            onClick={submitDeletion}
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
