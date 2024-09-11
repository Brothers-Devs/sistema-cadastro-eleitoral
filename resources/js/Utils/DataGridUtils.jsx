import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AiOutlineInbox } from "react-icons/ai";
import {
  DataGrid,
  GridLogicOperator,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { ptBR } from "@mui/x-data-grid/locales";
import { useCallback } from "react";

const theme = createTheme(ptBR);

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
  return <QuickSearchToolbar key="quick-search-toolbar" />;
}

export default function DataGridUtils({
  dataContent,
  columns,
  rowCount,
  paginationModel,
  handlePaginationModelChange,
  onFilterModelChange,
  setRowSelected,
}) {
  const handleQuickFilterChange = useCallback(
    (model) => {
      const searchValue = model?.quickFilterValues[0] || ""; // Proteção contra undefined
      onFilterModelChange(searchValue);
    },
    [onFilterModelChange]
  );

  return (
    <ThemeProvider theme={theme}>
      <DataGrid
        sx={{
          p: 3,
          height: "46.68rem",
          backgroundColor: "#FFFFFF",
        }}
        getRowId={(rows) => {
          return rows.id;
        }}
        rows={dataContent}
        pagination
        paginationMode="server"
        rowCount={rowCount}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationModelChange}
        onFilterModelChange={handleQuickFilterChange}
        columns={columns}
        disableRowSelectionOnClick
        disableColumnMenu
        pageSizeOptions={[10, 25, 50]}
        initialState={{
          sorting: {
            sortModel: [{ field: "id", sort: "desc" }],
          },
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
        showCellVerticalBorder={true}
        showColumnVerticalBorder={true}
        onRowClick={(params) => setRowSelected(params)}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </ThemeProvider>
  );
}
