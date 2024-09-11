import ButtonsActions from "../Actions/ButtonActions";
import { mask } from "remask";
const PATTERN_CPF = ["999.999.999-99"];
const PATTERN_PHONE = ["(99) 9 9999-9999"];

const columnsVoters = (modification, setModification) => [
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
    // valueGetter: (params) => {
    //   // return `${mask(row?.cpf, PATTERN_CPF)}`;
    //   return mask(params, PATTERN_CPF);
    // },
    // filterable: true,
    // sortComparator: (v1, v2) => v1.localeCompare(v2),
  },
  {
    field: "phone",
    headerName: "Telefone",
    flex: 1,
    minWidth: 140,
    disableClickEventBubbling: true,
    headerClassName: "bg-bodydark2 text-white",
    valueGetter: (params) => {
      return mask(params, PATTERN_PHONE);
    },
  },
  {
    field: "title_number",
    headerName: "Nº Título",
    flex: 1,
    minWidth: 130,
    disableClickEventBubbling: true,
    headerClassName: "bg-bodydark2 text-white",
    valueGetter: (params) => {
      return params ? params : "-";
    },
  },
  {
    field: "zone",
    headerName: "Zona / Sessão",
    flex: 1,
    minWidth: 120,
    disableClickEventBubbling: true,
    headerClassName: "bg-bodydark2 text-white",
    valueGetter: (params, row) => {
      return `${params ? params : "-"} / ${row?.session ? row?.session : "-"}`;
    },
  },

  // {
  //   field: "leader",
  //   headerName: "Liderança",
  //   flex: 1,
  //   minWidth: 207,
  //   disableClickEventBubbling: true,
  //   headerClassName: "bg-bodydark2 text-white",
  //   valueGetter: (_, row) => {
  //     return `${row?.leader.name} (${mask(row?.leader.cpf, PATTERN_CPF)})`;
  //   },
  // },
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
];

export default columnsVoters;
