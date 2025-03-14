import React from "react";
import { TextField } from "@mui/material";

const Step3 = ({ register, errors }) => {
  return (
    <div>
      <TextField
        {...register("moreinfo")}
        label="Más información"
        multiline
        minRows={5}
        error={!!errors?.name}
        helperText={errors.name?.message}
        margin="normal"
        fullWidth
      />
    </div>
  );
};

export default Step3;
