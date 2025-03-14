import React from "react";
import { TextField } from "@mui/material";

const Step2 = ({ register, errors }) => {
  return (
    <div>
      <TextField
        {...register("city", {
          required: "Este campo es obligatorio",
          maxLength: {
            value: 50,
            message: "El valor debe ser menor a 50 caracteres",
          },
        })}
        label="Ciudad"
        error={!!errors?.city}
        helperText={errors.city?.message}
        margin="normal"
        fullWidth
      />

      <TextField
        {...register("address", {
          required: "Este campo es obligatorio",
        })}
        label="Dirección"
        error={!!errors?.address}
        helperText={errors.address?.message}
        margin="normal"
        fullWidth
      />

      <TextField
        {...register("zipcode", {
          required: "Este campo es obligatorio",
          minLength: {
            value: 5,
            message: "El código postal debe tener 5 dígitos",
          },
          maxLength: {
            value: 5,
            message: "El código postal debe tener 5 dígitos",
          },
        })}
        type="number"
        label="Código postal"
        error={!!errors.zipcode}
        helperText={errors.zipcode?.message}
        margin="normal"
        fullWidth
      />
    </div>
  );
};

export default Step2;
