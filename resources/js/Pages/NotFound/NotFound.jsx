import DefaultLayout from "@/Layouts/DefaultLayout";
import { FcHighPriority } from "react-icons/fc";
import { Box } from "@mui/material";
import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";

export default function NotFound() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Registro não encontrado" />
      <Box
        sx={{
          width: "100%",
          height: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <FcHighPriority size={120} />
        <h2 className="text-zinc-400 font-satoshi text-lg">
          404 | Registro Não Encontrado!
        </h2>
      </Box>
    </DefaultLayout>
  );
}
