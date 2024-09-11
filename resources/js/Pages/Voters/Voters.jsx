import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import PrimaryButton from "@/Components/PrimaryButton";
import DefaultLayout from "@/Layouts/DefaultLayout";
import DataGridUtils from "@/Utils/DataGridUtils";
import { Tooltip } from "@mui/material";
import { useMemo, useState } from "react";
import ModalCreateVoter from "./Modal/ModalCreateVoter";
import { usePage, router } from "@inertiajs/react";
import { useEffect } from "react";
import { useCallback } from "react";
import { debounce } from "lodash";
import columnsVoters from "./Columns/columnsVoters";

export default function Voters() {
  const [modification, setModification] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [rowSelected, setRowSelected] = useState(false);

  const { voters, leaders, filters } = usePage().props;

  const [searchText, setSearchText] = useState(filters?.searchText || "");
  const [paginationModel, setPaginationModel] = useState({
    page: voters?.current_page - 1, // Ajuste para o índice da página inicial do DataGrid
    pageSize: voters?.per_page,
  });

  const handleClose = () => {
    setOpenModal(false);
  };

  // Chama toda vez que as variáveis,presentes no array de depêndia, muda
  useEffect(() => {
    router.get(
      "/voters",
      {
        page: paginationModel.page + 1,
        perPage: paginationModel.pageSize,
        search: searchText,
      },
      { preserveState: true, preserveScroll: true }
    );
  }, [
    paginationModel.page,
    paginationModel.pageSize,
    searchText,
    modification,
  ]);

  const handlePaginationModelChange = (newModel) => {
    setPaginationModel(newModel);
  };

  const debounceSearch = useCallback(
    debounce((search) => {
      setSearchText(search);
    }, 300),
    []
  );

  const handleSearchChange = (event) => {
    const newValue = event || "";
    debounceSearch(newValue);
  };

  const columns = useMemo(
    () => columnsVoters(modification, setModification),
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
        dataContent={voters?.data || []}
        columns={columns}
        rowCount={voters?.total || 0}
        paginationModel={paginationModel}
        handlePaginationModelChange={handlePaginationModelChange}
        onFilterModelChange={handleSearchChange}
        setRowSelected={setRowSelected}
      />

      {/* Modal de Cadastro de Eleitores */}
      <ModalCreateVoter
        showModal={openModal}
        handleClose={handleClose}
        title={"Cadastrar Eleitor"}
        typeButton={"Salvar"}
        leaders={leaders}
        modification={modification}
        setModification={setModification}
      />
    </DefaultLayout>
  );
}
