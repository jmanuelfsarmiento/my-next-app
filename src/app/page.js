"use client";

import CenteredContainer from "@/components/CenteredContainer";
import StyledButton from "@/components/StyledButton";
import React from "react";

export default function Page() {
  return (
    <CenteredContainer>
      <div>
        <StyledButton variant="contained" color="primary" href="/form">Formulario</StyledButton>
        <StyledButton variant="contained" color="success" href="/calendar">Calendario</StyledButton>
      </div>
    </CenteredContainer>
  );
}
