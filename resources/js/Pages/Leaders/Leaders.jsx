import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import PrimaryButton from "@/Components/PrimaryButton";
import DefaultLayout from "@/Layouts/DefaultLayout";
import DataGridUtils from "@/Utils/DataGridUtils";
import { Tooltip } from "@mui/material";
import { useMemo, useState } from "react";
import ButtonsActions from "./Actions/ButtonActions";
import { mask } from "remask";
import ModalCreateLeader from "./Modal/ModalCreateLeader";

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
      },
      {
        field: "name",
        headerName: "Nome",
        width: 250,
        disableClickEventBubbling: true,
      },
      {
        field: "cpf",
        headerName: "CPF",
        width: 130,
        disableClickEventBubbling: true,
        valueGetter: (_, row) => {
          return `${mask(row?.cpf, PATTERN_CPF)}`;
        },
      },
      {
        headerName: "Ações",
        width: 90,
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
      <Breadcrumb pageName="Lideres" />

      <div className="flex justify-between">
        <div></div>
        <PrimaryButton
          className="bg-green-600 hover:bg-green-500 mb-10 h-11"
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
        title={"Cadastrar Eleitor"}
        typeButton={"Cadastrar Eleitor"}
      />
    </DefaultLayout>
  );
}
