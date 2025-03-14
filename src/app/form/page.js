"use client";

import Formulario from "@/app/form/components/Form";
import CenteredContainer from "@/components/CenteredContainer";
import StyledButton from "@/components/StyledButton";
import { Box, Typography } from "@mui/material";

export default function Pages() {
  return (
    <CenteredContainer>
      <Box marginBottom={4}>
        <StyledButton disabled>Formulario</StyledButton>
        <StyledButton variant="contained" href="/calendar">
          Calendario
        </StyledButton>
      </Box>
      <Typography variant="h2" gutterBottom>
        Formulario
      </Typography>
      <Formulario />
    </CenteredContainer>
  );
}
