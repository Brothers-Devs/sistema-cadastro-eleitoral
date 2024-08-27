import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import PrimaryButton from "@/Components/PrimaryButton";
import DefaultLayout from "@/Layouts/DefaultLayout";
import DataGridUtils from "@/Utils/DataGridUtils";
import { Tooltip } from "@mui/material";
import { useMemo, useState } from "react";
import ButtonsActions from "./Actions/ButtonActions";
import { mask } from "remask";
import ModalCreateVoter from "./Modal/ModalCreateVoter";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

const PATTERN_CPF = ["999.999.999-99"];
const PATTERN_PHONE = ["(99) 9 9999-9999"];

export default function Voters() {
  const [modification, setModification] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [rowSelected, setRowSelected] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const { voters, leaders, filters } = usePage().props;
  console.log(voters);
  console.log(leaders);
  console.log(filters);
  const [paginationModel, setPaginationModel] = useState({
    page: voters.current_page - 1, // Ajuste para o índice da página inicial do DataGrid
    pageSize: voters.per_page,
  });
  const [searchText, setSearchText] = useState(filters?.search || "");

  useEffect(() => {
    Inertia.get(
      route("voters.list"),
      {
        page: paginationModel.page + 1,
        perPage: paginationModel.pageSize,
        search: searchText,
      },
      { preserveState: true, preserveScroll: true }
    );
  }, [paginationModel, searchText]);

  const handlePaginationModelChange = (newModel) => {
    setPaginationModel(newModel);
  };

  const handleSearchChange = (event) => {
    const newValue = event?.target?.value || "";
    setSearchText(newValue);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  };

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        flex: 1,
        minWidth: 64,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
      },
      {
        field: "name",
        headerName: "Nome",
        flex: 1,
        minWidth: 250,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
      },
      {
        field: "cpf",
        headerName: "CPF",
        flex: 1,
        minWidth: 130,
        headerClassName: "bg-bodydark2 text-white",
        disableClickEventBubbling: true,
        valueGetter: (_, row) => {
          return `${mask(row?.cpf, PATTERN_CPF)}`;
        },
      },
      {
        field: "phone",
        headerName: "Telefone",
        flex: 1,
        minWidth: 140,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
        valueGetter: (_, row) => {
          return `${mask(row?.phone, PATTERN_PHONE)}`;
        },
      },
      {
        field: "title_number",
        headerName: "Nº Título",
        flex: 1,
        minWidth: 130,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
        valueGetter: (_, row) => {
          return `${row?.title_number ? row?.title_number : "-"}`;
        },
      },
      {
        field: "zone",
        headerName: "Zona / Sessão",
        flex: 1,
        minWidth: 120,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
        valueGetter: (_, row) => {
          return `${row?.zone ? row?.zone : "-"} / ${
            row?.session ? row?.session : "-"
          }`;
        },
      },

      {
        field: "leader",
        headerName: "Liderança",
        flex: 1,
        minWidth: 207,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
        valueGetter: (_, row) => {
          return `${row?.leader.name} (${mask(row?.leader.cpf, PATTERN_CPF)})`;
        },
      },
      {
        headerName: "Ações",
        flex: 1,
        minWidth: 108,
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
        dataContent={voters.data}
        columns={columns}
        rowCount={Number(voters?.total)}
        paginationModel={paginationModel}
        handlePaginationModelChange={handlePaginationModelChange}
        onFilterModelChange={handleSearchChange}
        searchText={searchText}
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
