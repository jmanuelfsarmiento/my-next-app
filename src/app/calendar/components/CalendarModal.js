import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import {
  Overlay,
  ModalWrapper,
  ModalButtonWrapper,
  ModalButton,
} from "./styled";

const defaultColors = [
  "#2196F3", 
  "#F44336", 
  "#4CAF50", 
  "#FFEB3B", 
  "#9C27B0",
];



const CalendarModal = ({
  isOpen,
  onClose,
  title,
  eventTitle,
  setEventTitle,
  eventDescription,
  setEventDescription,
  eventColor,
  setEventColor,
  onSave,
  onDelete,
  isEdit,
  selectedEvent,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalWrapper>
        <Typography
          variant="h6"
          fontWeight="600"
          color="primary"
          marginBottom="15px"
        >
          {title}
        </Typography>
        <TextField
          label="Nombre del evento"
          fullWidth
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          sx={{ marginBottom: "15px" }}
        />
        <TextField
          label="Descripción del evento"
          fullWidth
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          sx={{ marginBottom: "15px" }}
        />
        <Typography variant="subtitle1" marginBottom={"5px"}>{isEdit ? "Cambiar color de evento" : "Selecciona el color del evento"}</Typography>
        <Box sx={{ display: "flex", gap: 1, marginBottom: "15px" }}>
          {defaultColors.map((color) => (
            <Box
              key={color}
              onClick={() => setEventColor(color)}
              sx={{
                width: 30,
                height: 30,
                backgroundColor: color,
                borderRadius: "50%",
                cursor: "pointer",
                border: eventColor === color ? `1px solid ${color}` : "none",
              }}
            />
          ))}
        </Box>
        <ModalButtonWrapper style={{ marginTop: "30px", gap: "10px" }}>
          {isEdit && (
            <ModalButton onClick={onDelete} color="error" variant="text">
              Eliminar
            </ModalButton>
          )}
          <ModalButton onClick={onClose} color="default" variant="text">
            Cancelar
          </ModalButton>
          <ModalButton onClick={onSave} color="primary" variant="outlined">
            {isEdit ? "Editar" : "Guardar"}
          </ModalButton>
        </ModalButtonWrapper>
      </ModalWrapper>
    </>
  );
};

export default CalendarModal;
