import Backdrop from "@mui/material/Backdrop";
import {
  Autocomplete,
  Box,
  Divider,
  Fade,
  FormControl,
  Grid,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
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
  height: 600,
  width: "100%",
  maxWidth: 350,
  bgcolor: "background.paper",
  border: "1px solid",
  boxShadow: 24,
  p: 2,
  overflow: "auto",
};

const PATTERN_CPF = ["999.999.999-99"];
const PATTERN_PHONE = ["(99) 9 9999-9999"];

export default function ModalCreateVoter({
  showModal,
  handleClose,
  title,
  typeButton,
  leaders,
}) {
  const { data, setData, post, errors, processing, reset } = useForm({
    name: "",
    cpf: "",
    phone: "",
    title_number: "",
    zone: "",
    session: "",
    leader: {
      id: "",
      name: "",
      cpf: "",
      created_at: "",
      updated_at: "",
      nameWithCpf: "",
    },
  });

  const leadersWithCPFInName = leaders.map((leader) => {
    return {
      ...leader,
      nameWithCpf: `${leader.name} (${mask(leader.cpf, PATTERN_CPF)})`,
    };
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("voters.create"), {
      onSuccess: () => {
        Notify.success("Eleitor cadastro com sucesso!");
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
        <Grid container>
          <Grid item xs={10} sm={8} md={6} sx={style}>
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
                {/*Select de Liderança*/}
                <div className="w-full flex flex-colxl:flex-row mb-5">
                  <div className="w-full xl:w-2/3">
                    <FormControl required sx={{ width: 400 }}>
                      <InputLabel id="leader" className="mb-2">
                        Selecione a Liderança*
                      </InputLabel>
                      <Autocomplete
                        className="max-sm:w-67"
                        value={data?.leader}
                        onChange={(_, newValue) => {
                          setData("leader", newValue);
                        }}
                        id="leader"
                        options={leadersWithCPFInName}
                        renderInput={(params) => (
                          <TextField {...params} key={params.id} />
                        )}
                        getOptionLabel={(option) =>
                          option ? option.nameWithCpf : ""
                        }
                      />
                    </FormControl>

                    <InputError
                      message={errors["leader.id"]}
                      className="mt-2"
                    />
                  </div>
                  <div className="w-full xl:w-1/3"></div>
                </div>

                {/*Input de Nome*/}
                <div className="w-full flex flex-col gap-6 xl:flex-row mb-5">
                  <div className="w-full xl:w-2/3">
                    <InputLabel
                      htmlFor="name"
                      value="Nome*"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="name"
                      name="name"
                      value={data.name}
                      className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Nome Completo"
                      required={true}
                      autoComplete="name"
                      onChange={(e) => setData("name", e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2" />
                  </div>
                </div>

                {/*Input de CPF e Telefone*/}
                <div className="w-full flex flex-col gap-6 xl:flex-row mb-5">
                  <div className="w-full xl:w-1/3">
                    <InputLabel
                      htmlFor="cpf"
                      value="CPF*"
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
                  <div className="w-full xl:w-1/3">
                    <InputLabel
                      htmlFor="phone"
                      value="Telefone*"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="phone"
                      name="phone"
                      value={data.phone}
                      className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="(91) 9 0000-0000"
                      required={true}
                      onChange={(e) =>
                        setData("phone", mask(e.target.value, PATTERN_PHONE))
                      }
                    />

                    <InputError message={errors.phone} className="mt-2" />
                  </div>
                </div>

                {/*Input de Título, Zona e Seção*/}
                <div className="w-full flex flex-col gap-6 xl:flex-row mb-5">
                  <div className="w-full xl:w-1/3">
                    <InputLabel
                      htmlFor="title_number"
                      value="Nº Título"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="title_number"
                      name="title_number"
                      value={data.title_number}
                      className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Nº Título"
                      onChange={(e) => setData("title_number", e.target.value)}
                    />

                    <InputError
                      message={errors.title_number}
                      className="mt-2"
                    />
                  </div>
                  <div className="w-full xl:w-1/3">
                    <InputLabel
                      htmlFor="zone"
                      value="Zona"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="zone"
                      name="zone"
                      value={data.zone}
                      className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Nº Zona"
                      onChange={(e) => setData("zone", e.target.value)}
                    />

                    <InputError message={errors.zone} className="mt-2" />
                  </div>
                  <div className="w-full xl:w-1/3">
                    <InputLabel
                      htmlFor="session"
                      value="Seção"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="session"
                      name="session"
                      value={data.session}
                      className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Seção"
                      onChange={(e) => setData("session", e.target.value)}
                    />

                    <InputError message={errors.session} className="mt-2" />
                  </div>
                </div>
                <PrimaryButton
                  disabled={processing}
                  onClick={submit}
                  className="flex w-full mt-3 h-12 justify-center rounded bg-green-600 p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  {typeButton}
                </PrimaryButton>
              </div>
            </form>
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  );
}
