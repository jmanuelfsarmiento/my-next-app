"use client";

import Calendario from "@/app/calendar/components/CalendarPage";
import CenteredContainer from "@/components/CenteredContainer";
import StyledButton from "@/components/StyledButton";
import { Box, Typography } from "@mui/material";

export default function Page() {
  return (
    <CenteredContainer>
      <Box marginBottom={4}>
        <StyledButton variant="contained" href="/form">
          Formulario
        </StyledButton>
        <StyledButton disabled>Calendario</StyledButton>
      </Box>
      <Typography variant="h2" gutterBottom>
        Calendario
      </Typography>
      <Calendario />
    </CenteredContainer>
  );
}
