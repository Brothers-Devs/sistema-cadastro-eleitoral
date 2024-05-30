import DefaultLayout from "@/Layouts/DefaultLayout";
import { Box } from "@mui/material";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, router, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { mask, unMask } from "remask";

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
  });

  const submit = (e) => {
    e.preventDefault();

    put(`/voters/${voter.id}`, {
      data,
      onSuccess: () => {
        Notify.success("Liderança Editado com Sucesso!");
        reset();
      },
      onError: (e) => {
        console.log(e);
        Notify.failure("Erro ao editar Liderança!");
      },
    });
  };

  return voter === null ? (
    <NotFound />
  ) : (
    <DefaultLayout>
      <Breadcrumb pageName="Editar Eleitor" />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={style}>
          <form onSubmit={submit} className="w-full">
            <div className="w-full p-6.5">
              {/*Input de Nome e Data*/}
              <div className="mb-10 flex flex-col gap-6 xl:flex-row">
                <div className="w-full h-14 xl:w-1/2">
                  <InputLabel
                    htmlFor="name"
                    value="Nome"
                    className="mb-2.5 block text-black dark:text-white"
                  />

                  <TextInput
                    id="name"
                    name="name"
                    value={data?.name}
                    className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="Nome"
                    required={true}
                    autoComplete="name"
                    onChange={(e) => setData("name", e.target.value)}
                  />

                  <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="w-full  xl:w-1/2">
                  <InputLabel
                    htmlFor="cpf"
                    value="CPF"
                    className="mb-2.5 block text-black dark:text-white"
                  />

                  <TextInput
                    id="cpf"
                    name="cpf"
                    value={data?.cpf}
                    className="w-full h-14 mt-1 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="999.999.999-99"
                    required={true}
                    onChange={(e) =>
                      setData("cpf", mask(e.target.value, PATTERN_CPF))
                    }
                  />

                  <InputError message={errors.cpf} className="mt-2" />
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
                  <PrimaryButton
                    type="submit"
                    disabled={processing}
                    onClick={submit}
                    className="flex mt-3 w-full h-12 justify-center rounded bg-green-600 p-3 font-medium text-gray hover:bg-opacity-90"
                  >
                    Editar Liderança
                  </PrimaryButton>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Link href={route("voters.list")}>
                    <PrimaryButton className="flex mt-3 w-full h-12 justify-center rounded bg-slate-600 p-3 font-medium text-gray hover:bg-opacity-90">
                      Cancelar
                    </PrimaryButton>
                  </Link>
                </Box>
              </Box>
            </div>
          </form>
        </Box>
      </Box>
    </DefaultLayout>
  );
}
