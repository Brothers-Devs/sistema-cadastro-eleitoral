import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import PrimaryButton from "@/Components/PrimaryButton";
import DefaultLayout from "@/Layouts/DefaultLayout";
import DataGridUtils from "@/Utils/DataGridUtils";
import { Tooltip } from "@mui/material";
import { useMemo, useState } from "react";
import ButtonsActions from "./Actions/ButtonActions";
import { mask } from "remask";
import ModalCreateLeader from "./Modal/ModalCreateLeader";
import dayjs from "dayjs";

const PATTERN_CPF = ["999.999.999-99"];

export default function Leaders({ items }) {
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
        headerName: "Nome da Liderança",
        width: 270,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
      },
      {
        field: "cpf",
        headerName: "CPF",
        width: 150,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
        valueGetter: (_, row) => {
          return `${mask(row?.cpf, PATTERN_CPF)}`;
        },
      },
      {
        field: "voters",
        headerName: "Total de Eleitores",
        width: 150,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
        valueGetter: (_, row) => {
          return `${row?.voters.length}`;
        },
        align: "center",
      },
      {
        field: "created_at",
        headerName: "Data de Cadastro",
        width: 180,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
        valueGetter: (_, row) => {
          return `${dayjs(row?.created_at).format("DD/MM/YYYY HH:mm")}`;
        },
      },
      {
        headerName: "Ações",
        width: 319,
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
      <Breadcrumb pageName="Lideranças" />

      <div className="flex justify-between">
        <div></div>
        <PrimaryButton
          className="bg-green-600 text-slate-50 hover:bg-green-500 mb-10 h-11"
          onClick={() => setOpenModal(!openModal)}
        >
          <Tooltip title="Cadastrar Liderança">Cadastrar</Tooltip>
        </PrimaryButton>
      </div>

      {/* Lista de Lideranças */}
      <DataGridUtils
        dataContent={items}
        columns={columns}
        setRowSelected={setRowSelected}
      />
      {/* Modal de Criação de Liderança */}
      <ModalCreateLeader
        showModal={openModal}
        handleClose={handleClose}
        title={"Cadastrar Liderança"}
        typeButton={"Salvar"}
      />
    </DefaultLayout>
  );
}
