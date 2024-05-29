import React from "react";
import ModalUltis from "@/Utils/ModalUtils";

const EditModal = ({ showModal, handleClose }) => {
  return (
    <ModalUltis
      showModal={showModal}
      handleClose={handleClose}
      title="Editar Eleitor"
      typeButton="Editar Eleitor"
      typeModal="edit"
    />
  );
};

export default EditModal;
