import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import TextInput from "@/Components/TextInput";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";

export default function SendWhatsapp() {
  // { Leaders }

  const [leaderSelected, setLeaderSelected] = useState({ name: "", cpf: "" });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    console.log(event.target.files);
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar o arquivo para o servidor ou fazer qualquer outra coisa que precisar com ele
    console.log(selectedFile);
  };

  const Leaders = [
    { name: "Lucas", cpf: "04356036204" },
    { name: "Gabriel", cpf: "12345678901" },
  ];

  const columns = useMemo(
    () => [
      {
        field: "name",
        headerName: "Nome da Liderança",
        width: 100,
        align: "center",
        headerAlign: "center",
        sortable: false,
        disableClickEventBubbling: true,
        headerClassName: "bg-bodydark2 text-white",
      },
      {
        field: "name",
        headerName: "Equipe",
        align: "center",
        width: 200,
        headerAlign: "center",
        sortable: false,
        headerClassName: "bg-bodydark2 text-white",
        disableClickEventBubbling: true,
      },
      {
        field: "fishermen",
        headerName: "Pescadores",
        width: 400,
        align: "center",
        disableClickEventBubbling: true,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        sortable: false,
        renderCell: (params) => (
          <CellNames
            {...{
              params,
            }}
          />
        ),
      },
      {
        field: "total_points",
        headerName: "Pontuação",
        flex: 1,
        headerAlign: "center",
        align: "center",
        headerClassName: "super-app-theme--header",
        disableClickEventBubbling: true,
        sortable: false,
      },
    ],
    []
  );

  const VotersOfLeaderSelected = Leaders.filter(
    (leader) => leader.cpf === leaderSelected.cpf
  );
  function handleOnChange(value) {
    setLeaderSelected({ ...leaderSelected, ...value });
  }

  return (
    <DefaultLayout>
      <>
        <Breadcrumb pageName={"Enviar Pelo Whatsapp"} />
        <Divider variant="fullWidth" />
        <Box
          sx={{
            marginTop: 3,
            paddingLeft: 6,
            width: 500,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Selecione a Liderança
          </Typography>
          <FormControl required sx={{ width: 400 }}>
            <InputLabel id="category">Liderança</InputLabel>
            <Select
              labelId="category"
              id="select-category"
              label="Categoria"
              value={leaderSelected?.name !== "" ? leaderSelected.name : ""}
              onChange={(e) => handleOnChange(e.target.value)}
            >
              {Leaders.map((leader) => (
                <MenuItem key={leader.name} value={leader.name}>
                  {leader.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        {leaderSelected.name !== "" ? (
          <>
            <form onSubmit={handleSubmit}>
              <TextInput
                type="file"
                onChange={handleFileChange}
                accept="image/*"
              />
              <input type="submit" value="Enviar" />
            </form>
          </>
        ) : null}
      </>
    </DefaultLayout>
  );
}
