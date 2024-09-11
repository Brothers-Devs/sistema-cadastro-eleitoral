import { mask } from "remask";
import dayjs from "dayjs";
import ButtonsActions from "../Actions/ButtonActions";

const PATTERN_CPF = ["999.999.999-99"];

const columnsLeaders = (modification, setModification) => [
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
    sortable: true,
    disableClickEventBubbling: true,
    headerClassName: "bg-bodydark2 text-white",
    valueGetter: (_, row) => {
      return Number(row?.voters.length);
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
];

export default columnsLeaders;
