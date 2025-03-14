import React from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import styled from "styled-components";

const ModalBox = styled(Box)`
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(
    -50%,
    -50%
  );
  width: 400px;
  background-color: white; 
  border-radius: 8px; 
  box-shadow: 12px; 
`;

const ButtonSubmit = styled(Button)`
  margin-top: 20px;
`;

export default function ModalComponent({ isModalOpen, onClose, formData }) {
  return (
    <Modal open={isModalOpen} onClose={onClose}>
      <ModalBox>
        <Typography
          variant="h6"
          height="10"
          fontWeight="600"
          color="primary"
          marginBottom="5px"
        >
          Datos ingresados
        </Typography>
        <Typography>Nombre: {formData.name}</Typography>
        <Typography>Email: {formData.mail}</Typography>
        <Typography>Teléfono: {formData.phone}</Typography>
        <Typography>Ciudad: {formData.city}</Typography>
        <Typography>Dirección: {formData.address}</Typography>
        <Typography>Código Postal: {formData.zipcode}</Typography>
        <Typography>Más información: {formData.moreinfo}</Typography>

        <ButtonSubmit onClick={onClose}>Cerrar</ButtonSubmit>
      </ModalBox>
    </Modal>
  );
}
