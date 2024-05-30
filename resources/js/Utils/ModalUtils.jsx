import Backdrop from "@mui/material/Backdrop";
import { Box, Divider, Fade, Modal, Tooltip, Typography } from "@mui/material";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { mask } from "remask";
import SecondaryButton from "@/Components/SecondaryButton";
import { useState } from "react";
import { Notify } from "notiflix";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 660,
  bgcolor: "background.paper",
  border: "1px solid",
  boxShadow: 24,
  p: 2,
  overflow: "auto",
};

const PATTERN_CPF = ["999.999.999-99"];
const PATTERN_PHONE = ["(99) 9 9999-9999"];
const PATTERN_DATE = ["99/99/9999"];
const PATTERN_CEP = ["99999-999"];

export default function ModalUltis({
  showModal,
  handleClose,
  title,
  typeButton,
  typeModal,
}) {
  const [dataVetorDefault, setDataVetorDefault] = useState();

  if (typeModal === "edit") {
    setDataVetorDefault(JSON.parse(localStorage.getItem("rowSelected")));
  }

  const { data, setData, post, errors, processing, reset, transform } = useForm(
    {
      name: dataVetorDefault?.row.name || "",
      cpf: dataVetorDefault?.row.cpf || "",
      phone: dataVetorDefault?.row.phone || "",
      date_of_birth: dataVetorDefault?.row.date_of_birth || "",
      rg: dataVetorDefault?.row.rg || "",
      title_number: dataVetorDefault?.row.title_number || "",
      zone: dataVetorDefault?.row.zone || "",
      session: dataVetorDefault?.row.session || "",
      address: dataVetorDefault?.row.address || "",
      zip_code: dataVetorDefault?.row.zip_code || "",
      neighborhood: dataVetorDefault?.row.neighborhood || "",
      city: dataVetorDefault?.row.city || "",
      leader_name: dataVetorDefault?.row.leader.leader_name || "",
      leader_cpf: dataVetorDefault?.row.leader.leader_cpf || "",
    }
  );

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
              {/*Input de Nome e Data*/}
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

                  <InputError message={errors.name} className="mt-2"/>
                </div>
                <div className="w-full xl:w-1/3">
                  <InputLabel
                    htmlFor="date_of_birth"
                    value="Data de Nascimento"
                    className="mb-2.5 block text-black dark:text-white"
                  />

                  <TextInput
                    id="date_of_birth"
                    name="date_of_birth"
                    value={data.date_of_birth}
                    className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="__/__/____"
                    required={true}
                    autoComplete="date"
                    onChange={(e) =>
                      setData(
                        "date_of_birth",
                        mask(e.target.value, PATTERN_DATE)
                      )
                    }
                  />

                  <InputError message={errors.date_of_birth} className="mt-2"/>
                </div>
              </div>

              {/*Input de RG, CPF e Telefone*/}
              <div className="w-full flex flex-col gap-6 xl:flex-row mb-5">
                <div className="w-full xl:w-1/3">
                  <InputLabel
                    htmlFor="rg"
                    value="RG"
                    className="mb-2.5 block text-black dark:text-white"
                  />

                  <TextInput
                    id="rg"
                    name="rg"
                    value={data.rg}
                    className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="RG"
                    onChange={(e) => setData("rg", e.target.value)}
                  />

                  <InputError message={errors.rg} className="mt-2"/>
                </div>
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

                  <InputError message={errors.cpf} className="mt-2"/>
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

                  <InputError message={errors.phone} className="mt-2"/>
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

                  <InputError message={errors.title_number} className="mt-2"/>
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

                  <InputError message={errors.zone} className="mt-2"/>
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

                  <InputError message={errors.session} className="mt-2"/>
                </div>
              </div>

              {/*Input de Endereço e CEP*/}
              <div className="w-full flex flex-col gap-6 xl:flex-row mb-5">
                <div className="w-full  xl:w-1/2">
                  <InputLabel
                    htmlFor="address"
                    value="Endereço"
                    className="mb-2.5 block text-black dark:text-white"
                  />

                  <TextInput
                    id="address"
                    name="address"
                    value={data.address}
                    className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="Endereço"
                    onChange={(e) => setData("address", e.target.value)}
                  />

                  <InputError message={errors.address} className="mt-2" />
                </div>
                <div className="w-full  xl:w-1/2">
                  <InputLabel
                    htmlFor="cep"
                    value="CEP"
                    className="mb-2.5 block text-black dark:text-white"
                  />

                  <TextInput
                    id="cep"
                    name="cep"
                    value={data.zip_code}
                    className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="00000-000"
                    onChange={(e) =>
                      setData("zip_code", mask(e.target.value, PATTERN_CEP))
                    }
                  />

                  <InputError message={errors.zip_code} className="mt-2" />
                </div>
              </div>

              {/*Input de Bairro e Cidade*/}
              <div className="w-full flex flex-col gap-6 xl:flex-row mb-5">
                <div className="w-full xl:w-1/2">
                  <InputLabel
                    htmlFor="neighborhood"
                    value="Bairro"
                    className="mb-2.5 block text-black dark:text-white"
                  />

                  <TextInput
                    id="neighborhood"
                    name="neighborhood"
                    value={data.neighborhood}
                    className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="Bairro"
                    onChange={(e) => setData("neighborhood", e.target.value)}
                  />

                  <InputError message={errors.neighborhood} className="mt-2" />
                </div>
                <div className="w-full xl:w-1/2">
                  <InputLabel
                    htmlFor="city"
                    value="Cidade"
                    className="mb-2.5 block text-black dark:text-white"
                  />

                  <TextInput
                    id="city"
                    name="city"
                    value={data.city}
                    className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="Cidade"
                    onChange={(e) => setData("city", e.target.value)}
                  />

                  <InputError message={errors.city} className="mt-2" />
                </div>
              </div>

              {/*Input de Nome do Líder e CPF*/}
              <div className="w-full flex flex-col gap-6 xl:flex-row mb-5">
                <div className="w-full  xl:w-1/2">
                  <InputLabel
                    htmlFor="leader"
                    value="Nome da Liderança*"
                    className="mb-2.5 block text-black dark:text-white"
                  />

                  <TextInput
                    id="leader"
                    name="leader"
                    value={data.leader_name}
                    className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="Nome da Liderança"
                    required={true}
                    onChange={(e) => setData("leader_name", e.target.value)}
                  />

                  <InputError message={errors.leader_name} className="mt-2" />
                </div>
                <div className="w-full  xl:w-1/2">
                  <InputLabel
                    htmlFor="leader_cpf"
                    value="CPF da Liderança*"
                    className="mb-2.5 block text-black dark:text-white"
                  />

                  <TextInput
                    id="leader_cpf"
                    name="leader_cpf"
                    value={data.leader_cpf}
                    className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="000.000.000-00"
                    required={true}
                    onChange={(e) =>
                      setData("leader_cpf", mask(e.target.value, PATTERN_CPF))
                    }
                  />

                  <InputError message={errors.leader_cpf} className="mt-2" />
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
