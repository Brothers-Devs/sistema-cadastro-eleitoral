import DefaultLayout from "@/Layouts/DefaultLayout";
import { Autocomplete, Box, FormControl, TextField } from "@mui/material";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { mask } from "remask";

import { Notify } from "notiflix";
import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import NotFound from "../NotFound/NotFound";

const PATTERN_CPF = ["999.999.999-99"];
const PATTERN_PHONE = ["(99) 9 9999-9999"];

export default function Edit({ voter, leaders }) {
  const dataLeaders = [...leaders];
  const { data, setData, put, errors, processing, reset } = useForm({
    name: voter?.name || "",
    cpf: voter?.cpf ? mask(voter?.cpf, PATTERN_CPF) : "",
    phone: voter?.phone ? mask(voter?.phone, PATTERN_PHONE) : "",
    title_number: voter?.title_number || "",
    zone: voter?.zone || "",
    session: voter?.session || "",
    leader: voter?.leader
      ? {
          ...voter.leader,
          nameWithCpf: `${voter?.leader?.name} (${mask(
            voter?.leader?.cpf,
            PATTERN_CPF
          )})`,
        }
      : "",
  });

  const leadersWithCPFInName = dataLeaders?.map((leader) => {
    return {
      ...leader,
      nameWithCpf: `${leader.name} (${mask(leader.cpf, PATTERN_CPF)})`,
    };
  });

  const submit = (e) => {
    e.preventDefault();

    put(`/voters/${voter.id}`, {
      data,
      onSuccess: () => {
        Notify.success("Eleitor editado com sucesso!");
      },
      onError: (e) => {
        Notify.failure(
          "Algo deu errado, verifique os dados enviados e tente novamente!"
        );
      },
    });
  };

  return voter === null ? (
    <NotFound />
  ) : (
    <DefaultLayout>
      <Breadcrumb pageName="Editar Eleitor" />
      <div className="grid grid-cols-1 gap-9">
        <form onSubmit={submit} className="w-full">
          <div className="flex flex-col gap-9">
            {/* <!-- Dados da liderança --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Dados da Liderança
                </h3>
              </div>
              <div className="p-6.5">
                <div className="w-full flex flex-col xl:flex-row mb-5">
                  <div className="w-fullxl:w-2/3">
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
                          <TextField key={params.id} {...params} />
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
              </div>
            </div>
            {/* <!-- Dados Pessoais --> */}
            <div className="w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Dados Pessoais
                </h3>
              </div>

              <div className="p-6.5">
                {/*Input nome */}
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/3">
                    <InputLabel
                      htmlFor="name"
                      value="Nome do Eleitor*"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="name"
                      name="name"
                      value={data?.name}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Nome Completo"
                      required={true}
                      autoComplete="name"
                      onChange={(e) => setData("name", e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2" />
                  </div>
                  <div className="w-full xl:w-1/3"></div>
                </div>
                {/*Input de CPF e Telefone */}
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/3">
                    <InputLabel
                      htmlFor="cpf"
                      value="CPF*"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="cpf"
                      name="cpf"
                      value={data?.cpf}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="999.999.999-99"
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
                      value={data?.phone}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="(99) 9 9999-9999"
                      required={true}
                      onChange={(e) =>
                        setData("phone", mask(e.target.value, PATTERN_PHONE))
                      }
                    />

                    <InputError message={errors.phone} className="mt-2" />
                  </div>
                </div>

                {/*Input de Título, Zona e Seção*/}
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/3">
                    <InputLabel
                      htmlFor="title_number"
                      value="Nº Título"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="title_number"
                      name="title_number"
                      value={data?.title_number}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
                      value={data?.zone}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
                      value={data?.session}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Seção"
                      onChange={(e) => setData("session", e.target.value)}
                    />

                    <InputError message={errors.session} className="mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Link href={route("voters.list")}>
                <PrimaryButton className="flex mt-3 w-full h-12 justify-center rounded bg-slate-500 p-3 font-medium text-gray hover:bg-opacity-90">
                  Cancelar
                </PrimaryButton>
              </Link>
            </Box>
            <Box sx={{ width: "100%" }}>
              <PrimaryButton
                type="submit"
                disabled={processing}
                onClick={submit}
                className="flex mt-3 w-full h-12 justify-center rounded bg-green-600 p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Salvar
              </PrimaryButton>
            </Box>
          </Box>
        </form>
      </div>
    </DefaultLayout>
  );
}
