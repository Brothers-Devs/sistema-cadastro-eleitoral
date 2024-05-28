import Backdrop from "@mui/material/Backdrop";
import { Box, Divider, Fade, Modal, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import PrimaryButton from "@/Components/PrimaryButton";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 850,
  height: 660,
  bgcolor: "background.paper",
  border: "1px solid",
  boxShadow: 24,
  p: 2,
  overflow: "auto",
};
export default function ModalUltis({
  showModal,
  handleClose,
  title,
  typeButton,
}) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={showModal}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={showModal}>
        <Box sx={style}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              p: "26px",
            }}
          >
            {title}
          </Typography>
          <Divider variant="fullWidth" />
          <form action="#">
            <div className="w-full p-6.5">
              {/*Input de Nome e Data*/}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Nome <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    required={true}
                    placeholder="Nome"
                    className="w-full h-14 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Data de Nascimento
                  </label>
                  <DatePicker sx={{ width: "100%" }} />
                </div>
              </div>
              {/*Input de RG e CPF*/}
              <div className="w-full flex flex-col gap-6 xl:flex-row  mb-4.5">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    RG
                  </label>
                  <input
                    type="text"
                    placeholder="Seu RG"
                    className="w-full h-14 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    CPF <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    required={true}
                    placeholder="CPF"
                    className="w-full h-14 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              {/*Input de Telefone e Título*/}
              <div className="w-full flex flex-col gap-6 xl:flex-row  mb-4.5">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Telefone <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    required={true}
                    placeholder="Seu Telefone"
                    className="w-full h-14 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Título de Eleitor
                  </label>
                  <input
                    type="text"
                    placeholder="Seu Título"
                    className="w-full h-14 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              {/*Input de Zona e Seção*/}
              <div className="w-full flex flex-col gap-6 xl:flex-row  mb-4.5">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Zona
                  </label>
                  <input
                    type="text"
                    placeholder="Zona Eleitoral"
                    className="w-full h-14 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Seção
                  </label>
                  <input
                    type="text"
                    placeholder="Seção"
                    className="w-full h-14 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              {/*Input de Endereço e CEP*/}
              <div className="w-full flex flex-col gap-6 xl:flex-row  mb-4.5">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Endereço
                  </label>
                  <input
                    type="text"
                    placeholder="Seu Endereço"
                    className="w-full h-14 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    CEP
                  </label>
                  <input
                    type="text"
                    placeholder="CEP"
                    className="w-full h-14 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              {/*Input de Bairro e Cidade*/}
              <div className="w-full flex flex-col gap-6 xl:flex-row  mb-4.5">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Bairro
                  </label>
                  <input
                    type="text"
                    placeholder="Seu Bairro"
                    className="w-full h-14 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Cidade
                  </label>
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="w-full h-14 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              {/*Input de Nome do Líder e CPF*/}
              <div className="w-full flex flex-col gap-6 xl:flex-row  mb-4.5">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Nome da Liderança <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    required={true}
                    placeholder="Nome da Liderança"
                    className="w-full h-14 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    CPF da Liderança <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    required={true}
                    placeholder="CPF da Liderança"
                    className="w-full h-14 rounded border-[1.5px] border-stone-400 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              <PrimaryButton className="flex w-full h-12 justify-center rounded bg-green-600 p-3 font-medium text-gray hover:bg-opacity-90">
                {typeButton}
              </PrimaryButton>
            </div>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}
