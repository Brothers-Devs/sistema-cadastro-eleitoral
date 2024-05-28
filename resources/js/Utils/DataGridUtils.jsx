import { Box, Typography } from "@mui/material";
import { AiOutlineInbox } from "react-icons/ai";
import {
  DataGrid,
  GridLogicOperator,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 1,
        pb: 0,
        mb: 3,
      }}
    >
      <GridToolbarQuickFilter
        placeholder="Pesquisar. . ."
        quickFilterParser={(searchInput) =>
          searchInput
            .split(",")
            .map((value) => value.trim())
            .filter((value) => value !== "")
        }
      />
    </Box>
  );
}

function CustomNoRowsOverlay() {
  return (
    <Box
      sx={{
        width: 1,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <AiOutlineInbox size={100} style={{ marginBottom: "15px" }} />
      <Typography variant="h6">Sem Registros</Typography>
    </Box>
  );
}
function CustomToolbar() {
  return <QuickSearchToolbar />;
}

export default function DataGridUtils({
  dataContent,
  columns,
  setRowSelected,
}) {
  return (
    <DataGrid
      sx={{ p: 3, height: "33rem" }}
      getRowId={(rows) => rows.id}
      rows={dataContent}
      loading={dataContent.length === 0}
      columns={columns}
      disableRowSelectionOnClick
      disableColumnMenu
      key={dataContent?.id}
      pageSizeOptions={[10, 25, 50]}
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
        filter: {
          filterModel: {
            items: [],
            quickFilterLogicOperator: GridLogicOperator.Or,
          },
        },
      }}
      slots={{
        toolbar: CustomToolbar,
        noRowsOverlay: CustomNoRowsOverlay,
        noResultsOverlay: CustomNoRowsOverlay,
      }}
      onRowClick={(params) => setRowSelected(params)}
    />
  );
}