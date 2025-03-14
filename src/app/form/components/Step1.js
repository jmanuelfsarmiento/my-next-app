import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const Step1 = ({ errors, register }) => {
  return (
    <div>
      <TextField
        {...register("name", {
          required: "Este campo es obligatorio",
          maxLength: {
            value: 50,
            message: "El valor debe ser menor a 50 caracteres",
          },
        })}
        label="Nombre"
        error={!!errors?.name}
        helperText={errors.name?.message}
        margin="normal"
        fullWidth
      />

      <TextField
        {...register("mail", {
          required: "Este campo es obligatorio",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Ingresa un correo electrónico válido",
          },
        })}
        label="Correo electrónico"
        error={!!errors?.mail}
        helperText={errors.mail?.message}
        margin="normal"
        fullWidth
      />

      <TextField
        {...register("phone", {
          required: "Este campo es obligatorio",
          minLength: {
            value: 10,
            message: "El teléfono debe tener al menos 10 dígitos",
          },
          maxLength: {
            value: 12,
            message: "El teléfono debe tener máximo 12 dígitos",
          },
        })}
        type="number"
        label="Teléfono"
        error={!!errors.phone}
        helperText={errors.phone?.message}
        margin="normal"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">+52</InputAdornment>
            ),
          },
        }}
        fullWidth
      />
    </div>
  );
};

export default Step1;
