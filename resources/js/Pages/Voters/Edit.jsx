import DefaultLayout from "@/Layouts/DefaultLayout";
import { Box } from "@mui/material";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { mask } from "remask";

import { Notify } from "notiflix";
import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import NotFound from "../NotFound/NotFound";

const style = {
  width: 800,
  display: "flex",
  justifyContent: "center",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const PATTERN_CPF = ["999.999.999-99"];
const PATTERN_PHONE = ["(99) 9 9999-9999"];
const PATTERN_DATE = ["99/99/9999"];
const PATTERN_CEP = ["99999-999"];

export default function Edit({ voter }) {
  const { data, setData, put, errors, processing, reset } = useForm({
    name: voter?.name || "",
    cpf: voter?.cpf ? mask(voter?.cpf, PATTERN_CPF) : "",
    phone: voter?.phone ? mask(voter?.phone, PATTERN_PHONE) : "",
    date_of_birth: voter?.date_of_birth
      ? mask(voter?.date_of_birth, PATTERN_DATE)
      : "",
    rg: voter?.rg || "",
    title_number: voter?.title_number || "",
    zone: voter?.zone || "",
    session: voter?.session || "",
    address: voter?.address || "",
    zip_code: voter?.zip_code ? mask(voter?.zip_code, PATTERN_CEP) : "",
    neighborhood: voter?.neighborhood || "",
    city: voter?.city || "",
    leader_name: voter?.leader.name || "",
    leader_cpf: voter?.leader.cpf ? mask(voter?.leader.cpf, PATTERN_CPF) : "",
  });

  const submit = (e) => {
    e.preventDefault();

    put(`/voters/${voter.id}`, {
      data,
      onSuccess: () => {
        Notify.success("Eleitor editado com sucesso!");
        Notify.success("Eleitor editado com sucesso!");
        reset();
      },
      onError: (e) => {
        console.log(e);
        Notify.failure(
          "Algo deu errado, verifique os dados enviados e tente novamente!"
        );
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
            {/* <!-- Dados Pessoais --> */}
            <div className="w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Dados Pessoais
                </h3>
              </div>

              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/3">
                    <InputLabel
                      htmlFor="name"
                      value="Nome*"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="name"
                      name="name"
                      value={data?.name}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Nome"
                      required={true}
                      autoComplete="name"
                      onChange={(e) => setData("name", e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2" />
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
                      value={data?.date_of_birth}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Data de Nascimento"
                      required={true}
                      autoComplete="date"
                      onChange={(e) =>
                        setData(
                          "date_of_birth",
                          mask(e.target.value, PATTERN_DATE)
                        )
                      }
                    />

                    <InputError
                      message={errors.date_of_birth}
                      className="mt-2"
                    />
                  </div>
                  <div className="w-full xl:w-1/3"></div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/3">
                    <InputLabel
                      htmlFor="rg"
                      value="RG"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="rg"
                      name="rg"
                      value={data?.rg}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="RG"
                      onChange={(e) => setData("rg", e.target.value)}
                    />

                    <InputError message={errors.rg} className="mt-2" />
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

                {/*Input de Endereço*/}
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/3">
                    <InputLabel
                      htmlFor="cep"
                      value="CEP"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="cep"
                      name="cep"
                      value={data?.zip_code}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="CEP"
                      onChange={(e) =>
                        setData("zip_code", mask(e.target.value, PATTERN_CEP))
                      }
                    />

                    <InputError message={errors.zip_code} className="mt-2" />
                  </div>
                  <div className="w-full xl:w-1/3"></div>
                  <div className="w-full xl:w-1/3"></div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-2/4">
                    <InputLabel
                      htmlFor="address"
                      value="Endereço"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="address"
                      name="address"
                      value={data?.address}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Endereço"
                      onChange={(e) => setData("address", e.target.value)}
                    />

                    <InputError message={errors.address} className="mt-2" />
                  </div>
                  <div className="w-full xl:w-1/4">
                    <InputLabel
                      htmlFor="neighborhood"
                      value="Bairro"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="neighborhood"
                      name="neighborhood"
                      value={data?.neighborhood}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Bairro"
                      onChange={(e) => setData("neighborhood", e.target.value)}
                    />

                    <InputError
                      message={errors.neighborhood}
                      className="mt-2"
                    />
                  </div>
                  <div className="w-full xl:w-1/4">
                    <InputLabel
                      htmlFor="city"
                      value="Cidade"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="city"
                      name="city"
                      value={data?.city}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Cidade"
                      onChange={(e) => setData("city", e.target.value)}
                    />

                    <InputError message={errors.city} className="mt-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Dados da liderança --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Dados da Liderança
                </h3>
              </div>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <InputLabel
                      htmlFor="leader"
                      value="Nome da Liderança*"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="leader"
                      name="leader"
                      value={data?.leader_name}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="Nome da Liderança"
                      required={true}
                      onChange={(e) => setData("leader_name", e.target.value)}
                    />

                    <InputError message={errors.leader_name} className="mt-2" />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <InputLabel
                      htmlFor="leader_cpf"
                      value="CPF da Liderança*"
                      className="mb-2.5 block text-black dark:text-white"
                    />

                    <TextInput
                      id="leader_cpf"
                      name="leader_cpf"
                      value={data?.leader_cpf}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="CPF da Liderança"
                      required={true}
                      onChange={(e) =>
                        setData("leader_cpf", mask(e.target.value, PATTERN_CPF))
                      }
                    />

                    <InputError message={errors.leader_cpf} className="mt-2" />
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
                Editar Eleitor
              </PrimaryButton>
            </Box>
          </Box>
        </form>
      </div>
    </DefaultLayout>
  );
}
