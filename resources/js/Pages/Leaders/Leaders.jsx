import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import PrimaryButton from "@/Components/PrimaryButton";
import DefaultLayout from "@/Layouts/DefaultLayout";
import DataGridUtils from "@/Utils/DataGridUtils";
import { Tooltip } from "@mui/material";
import { useMemo, useState } from "react";
import ModalCreateLeader from "./Modal/ModalCreateLeader";
import columnsLeaders from "./Columns/columnsLeaders";

export default function Leaders({ items }) {
  const [modification, setModification] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [rowSelected, setRowSelected] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const columns = useMemo(
    () => columnsLeaders(modification, setModification),
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
