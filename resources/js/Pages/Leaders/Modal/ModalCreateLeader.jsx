import Backdrop from "@mui/material/Backdrop";
import { Box, Divider, Fade, Modal, Tooltip, Typography } from "@mui/material";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { mask } from "remask";
import SecondaryButton from "@/Components/SecondaryButton";
import { Notify } from "notiflix";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 850,
  minWidth: { xs: "95%", sm: "70%", md: "50%", lg: "40%" },
  maxWidth: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  overflow: "auto",
};

const PATTERN_CPF = ["999.999.999-99"];

export default function ModalCreateLeader({
  showModal,
  handleClose,
  title,
  typeButton,
}) {
  const { data, setData, post, errors, processing, reset } = useForm({
    name: "",
    cpf: "",
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("leaders.create"), {
      onSuccess: () => {
        Notify.success("Liderança cadastra com sucesso!");
        reset();
        handleClose();
      },
      onError: (e) => {
        Notify.failure("Algo deu errado, tente novamente");
      },
    });
  };

  return (
    <Modal
      style={{ zIndex: 999 }}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={showModal}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={showModal}>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: "15px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              {title}
            </Typography>
            <SecondaryButton onClick={handleClose} className="h-8">
              <Tooltip title="Fechar">X</Tooltip>
            </SecondaryButton>
          </Box>
          <Divider variant="fullWidth" />
          <form onSubmit={submit}>
            <div className="w-full p-6.5">
              {/*Input de Nome do Líder e CPF*/}
              <div className="w-full flex flex-col gap-6 xl:flex-row max-xl:left-1 mb-5">
                <div className="w-full  xl:w-1/2">
                  <InputLabel
                    htmlFor="name"
                    value="Nome da Liderança*"
                    className="mb-2.5 block text-black dark:text-white"
                  />

                  <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="Nome da Liderança"
                    required={true}
                    onChange={(e) => setData("name", e.target.value)}
                  />

                  <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="w-full  xl:w-1/2">
                  <InputLabel
                    htmlFor="cpf"
                    value="CPF da Liderança*"
                    className="mb-2.5 block text-black dark:text-white"
                  />

                  <TextInput
                    id="cpf"
                    name="cpf"
                    value={data.cpf}
                    className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="000.000.000-00"
                    required={true}
                    onChange={(e) =>
                      setData("cpf", mask(e.target.value, PATTERN_CPF))
                    }
                  />

                  <InputError message={errors.cpf} className="mt-2" />
                </div>
              </div>
              <PrimaryButton
                type="submit"
                disabled={processing}
                onClick={submit}
                className="flex w-full mt-3 h-12 justify-center rounded bg-green-600 p-3 font-medium text-gray hover:bg-opacity-90"
              >
                {typeButton}
              </PrimaryButton>
            </div>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}
