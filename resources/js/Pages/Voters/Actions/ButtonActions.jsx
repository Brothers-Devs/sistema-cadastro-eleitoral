import { Box, Modal, Stack, Tooltip, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Create } from "@mui/icons-material";
import { useState } from "react";
import { GoAlert } from "react-icons/go";
import { mask } from "remask";
import { router } from "@inertiajs/react";
import { Notify } from "notiflix";
import PrimaryButton from "@/Components/PrimaryButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: 500,
  height: 280,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
const PATTERN_CPF = ["999.999.999-99"];

export default function ButtonsActions({
  rowSelected,
  modification,
  setModification,
}) {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleOpenModalDelete = () => setOpenModalDelete(true);
  const handleCloseModalDelete = () => setOpenModalDelete(false);

  function handleEdit() {
    router.get(`/voters/${rowSelected?.id}/edit`);
  }

  return (
    <Stack direction="row" alignItems="center" spacing={0}>
      <Tooltip title="Editar">
        <IconButton
          aria-label="edit"
          size="medium"
          color="primary"
          onClick={handleEdit}
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
          rowId={rowSelected?.id}
          dataVoter={rowSelected}
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
            alignItems: "center",
            flexDirection: "column",
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
            dataVoter.name
          } de CPF: ${mask(dataVoter.cpf, PATTERN_CPF)} ?`}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={4} sx={{ mt: 5 }}>
          <PrimaryButton
            className="bg-slate-200 p-3 font-medium text-slate-700 hover:bg-slate-100 mb-10 h-11"
            onClick={handleClose}
          >
            Cancelar
          </PrimaryButton>
          <PrimaryButton
            className="bg-red-600 p-3 font-medium text-slate-50 hover:bg-red-400 mb-10 h-11"
            onClick={submitDeletion}
          >
            Excluir
          </PrimaryButton>
        </Stack>
      </Box>
    </Modal>
  );
}
