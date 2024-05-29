import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import PrimaryButton from "@/Components/PrimaryButton";
import DefaultLayout from "@/Layouts/DefaultLayout";
import DataGridUtils from "@/Utils/DataGridUtils";
import ModalUltis from "@/Utils/ModalUtils";
import { Tooltip } from "@mui/material";
import { useMemo, useState } from "react";
import ButtonsActions from "./Actions/ButtonActions";
import { mask } from "remask";
import EditModal from "./Edit/EditModal";

const PATTERN_CPF = ["999.999.999-99"];
const PATTERN_PHONE = ["(99) 9 9999-9999"];

export default function Voters({ items }) {
  const [modification, setModification] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [rowSelected, setRowSelected] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [editingVoter, setEditingVoter] = useState(null);

  const handleEdit = (parseRowSelected) => {
    console.log(parseRowSelected);
    setEditingVoter(parseRowSelected);
    setOpenModalEdit(true);
  };
  const handleCloseModal = () => {
    setOpenModalEdit(!openModalEdit);
    setEditingVoter(null);
  };
  const handleClose = () => {
    localStorage.removeItem("rowSelected");
    setOpenModal(false);
  };

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
        valueGetter: (_, row) => {
          return `${mask(row?.cpf, PATTERN_CPF)}`;
        },
      },
      {
        field: "phone",
        headerName: "Telefone",
        width: 160,
        disableClickEventBubbling: true,
        valueGetter: (_, row) => {
          return `${mask(row?.phone, PATTERN_PHONE)}`;
        },
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
        renderCell: () => (
          <ButtonsActions
            {...{
              handleEdit,
              openModalEdit,
              setOpenModalEdit,
              modification,
              setModification,
            }}
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
          className="bg-green-600 hover:bg-green-500 mb-10 h-11"
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

      {/* Modal de Criação ou Edição de Eleitor */}
      <ModalUltis
        showModal={openModal}
        handleClose={handleClose}
        title={"Cadastrar Eleitor"}
        typeButton={"Cadastrar Eleitor"}
      />
      {editingVoter && (
        <>
          {/* <EditModal showModal={openModalEdit} handleClose={handleCloseModal} /> */}
          <ModalUltis
            showModal={openModalEdit}
            handleClose={handleCloseModal}
            title="Editar Eleitor"
            typeButton="Editar Eleitor"
            typeModal="edit"
          />
        </>
      )}
    </DefaultLayout>
  );
}
