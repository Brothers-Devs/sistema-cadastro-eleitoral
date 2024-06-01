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

export default function Edit({ leader }) {
  const { data, setData, put, errors, processing, reset } = useForm({
    name: leader?.name || "",
    cpf: leader?.cpf ? mask(leader?.cpf, PATTERN_CPF) : "",
  });

  const submit = (e) => {
    e.preventDefault();

    put(`/leaders/${leader.id}`, {
      data,
      onSuccess: () => {
        Notify.success("Liderança editada com sucesso!");
        reset();
      },
      onError: (e) => {
        console.log(e);
        Notify.failure(
          "Algo deu errado, verifique os dados enviados e tente novamente!"
        );
      },
    });
  };

  return leader === null ? (
    <NotFound />
  ) : (
    <DefaultLayout>
      <Breadcrumb pageName="Editar Liderança" />

      <form onSubmit={submit} className="w-full">
        {/* <!-- Dados Pessoais --> */}
        <div className="w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Dados Pessoais
            </h3>
          </div>

          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <InputLabel
                  htmlFor="name"
                  value="Nome da Liderança*"
                  className="mb-2.5 block text-black dark:text-white"
                />

                <TextInput
                  id="name"
                  name="name"
                  value={data?.name}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  placeholder="Informe o nome"
                  required={true}
                  autoComplete="name"
                  onChange={(e) => setData("name", e.target.value)}
                />

                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="w-full xl:w-1/2">
                <InputLabel
                  htmlFor="cpf"
                  value="CPF da Liderança*"
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
            <Link href={route("leaders.list")}>
              <PrimaryButton className="flex mt-3 w-full h-12 justify-center rounded bg-slate-600 p-3 font-medium text-gray hover:bg-opacity-90">
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
    </DefaultLayout>
  );
}
