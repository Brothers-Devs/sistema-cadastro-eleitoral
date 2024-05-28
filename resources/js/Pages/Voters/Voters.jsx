import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import PrimaryButton from "@/Components/PrimaryButton";
import DefaultLayout from "@/Layouts/DefaultLayout";
import DataGridUtils from "@/Utils/DataGridUtils";
import ModalUltis from "@/Utils/ModalUtils";
import { Tooltip } from "@mui/material";
import { useMemo, useState } from "react";
import ButtonsActions from "./Actions/ButtonActions";
import { mask } from "remask";

const PATTERN_CPF = ["999.999.999-99"];

export default function Voters({ itens }) {
  const [openModal, setOpenModal] = useState(false);
  const [rowSelected, setRowSelected] = useState(false);
  const handleClose = () => setOpenModal(false);

  localStorage.setItem(
    "rowSelected",
    rowSelected ? JSON.stringify(rowSelected) : null
  );

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        width: 80,
        disableClickEventBubbling: true,
      },
      {
        field: "name",
        headerName: "Nome",
        width: 150,
        disableClickEventBubbling: true,
      },
      {
        field: "cpf",
        headerName: "CPF",
        width: 130,
        disableClickEventBubbling: true,
      },
      {
        field: "phone",
        headerName: "Telefone",
        width: 160,
        disableClickEventBubbling: true,
      },
      {
        field: "city",
        headerName: "Município",
        width: 160,
        disableClickEventBubbling: true,
      },
      {
        field: "neighborhood",
        headerName: "Bairro",
        width: 150,
        disableClickEventBubbling: true,
      },

      {
        field: "leader",
        headerName: "Liderança",
        width: 160,
        disableClickEventBubbling: true,
        valueGetter: (_, row) => {
          return `${row?.leader.name} - (${mask(
            row?.leader.cpf,
            PATTERN_CPF
          )})`;
        },
      },
      {
        headerName: "Ações",
        width: 90,
        renderCell: (params) => (
          <ButtonsActions
            {...{
              params,
            }}
          />
        ),

        sortable: false,
        filterable: false,
        disableClickEventBubbling: true,
      },
    ],
    [rowSelected]
  );

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Eleitores" />

      <div className="flex justify-between">
        <div></div>
        <PrimaryButton
          className="bg-green-600 hover:bg-green-500 mb-10 h-11"
          onClick={() => setOpenModal(!openModal)}
        >
          <Tooltip title="Cadastrar Eleitor">Cadastrar</Tooltip>
        </PrimaryButton>
      </div>

      {/* Lista de Eleitores */}
      <DataGridUtils
        dataContent={itens}
        columns={columns}
        setRowSelected={setRowSelected}
      />

      {/* Modal de Criação ou Edição de Eleitor */}
      <ModalUltis
        showModal={openModal}
        handleClose={handleClose}
        title={"Formulário de Cadastro de Eleitores"}
        typeButton={"Cadastrar Eleitor"}
      />
    </DefaultLayout>
  );
}
