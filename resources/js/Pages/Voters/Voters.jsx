import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import PrimaryButton from "@/Components/PrimaryButton";
import DefaultLayout from "@/Layouts/DefaultLayout";
import DataGridUtils from "@/Utils/DataGridUtils";
import { Tooltip } from "@mui/material";
import { useMemo, useState } from "react";
import ButtonsActions from "./Actions/ButtonActions";
import { mask } from "remask";
import ModalCreateVoter from "./Modal/ModalCreateVoter";

const PATTERN_CPF = ["999.999.999-99"];
const PATTERN_PHONE = ["(99) 9 9999-9999"];

export default function Voters({ items, leaders }) {
  const [modification, setModification] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [rowSelected, setRowSelected] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        width: 80,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
      },
      {
        field: "name",
        headerName: "Nome",
        width: 250,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
      },
      {
        field: "cpf",
        headerName: "CPF",
        width: 130,
        headerClassName: "bg-bodydark2 text-white",
        disableClickEventBubbling: true,
        valueGetter: (_, row) => {
          return `${mask(row?.cpf, PATTERN_CPF)}`;
        },
      },
      {
        field: "phone",
        headerName: "Telefone",
        width: 140,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
        valueGetter: (_, row) => {
          return `${mask(row?.phone, PATTERN_PHONE)}`;
        },
      },
      {
        field: "city",
        headerName: "Município",
        width: 120,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
        valueGetter: (_, row) => {
          return `${row?.city ? row.city : "-"}`;
        },
      },
      {
        field: "neighborhood",
        headerName: "Bairro",
        width: 120,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
        valueGetter: (_, row) => {
          return `${row?.neighborhood ? row.neighborhood : "-"}`;
        },
      },

      {
        field: "leader",
        headerName: "Liderança",
        width: 200,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
        valueGetter: (_, row) => {
          return `${row?.leader.name} (${mask(row?.leader.cpf, PATTERN_CPF)})`;
        },
      },
      {
        headerName: "Ações",
        width: 108,
        headerClassName: "bg-bodydark2 text-white",
        renderCell: ({ row }) => (
          <ButtonsActions
            rowSelected={row}
            modification={modification}
            setModification={setModification}
          />
        ),

        sortable: false,
        filterable: false,
        disableClickEventBubbling: true,
      },
    ],
    [rowSelected, modification]
  );

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Eleitores" />

      <div className="flex justify-between">
        <div></div>
        <PrimaryButton
          className="bg-green-600 text-slate-50 hover:bg-green-500 mb-10 h-11"
          onClick={() => setOpenModal(!openModal)}
        >
          <Tooltip title="Cadastrar Eleitor">Cadastrar</Tooltip>
        </PrimaryButton>
      </div>

      {/* Lista de Eleitores */}
      <DataGridUtils
        dataContent={items}
        columns={columns}
        setRowSelected={setRowSelected}
      />

      {/* Modal de Cadastro de Eleitores */}
      <ModalCreateVoter
        showModal={openModal}
        handleClose={handleClose}
        title={"Cadastrar Eleitor"}
        typeButton={"Salvar"}
        leaders={leaders}
      />
    </DefaultLayout>
  );
}
