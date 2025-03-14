"use client";

import React, { lazy } from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import styled from "styled-components";
import ModalComponent from "./Modal";

import useStepForm from "@/app/form/hooks/useStepForm";

const Step1 = lazy(() => import("./Step1"));
const Step2 = lazy(() => import("./Step2"));
const Step3 = lazy(() => import("./Step3"));

const FormContainer = styled.form`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const steps = ["Información personal", "Dirección", "Más información"];

export default function Formulario() {
  const {
    register,
    errors,
    handleSubmit,
    onSubmit,
    activeStep,
    handleBack,
    handleNext,
    isModalOpen,
    setIsModalOpen,
    watchFormData,
  } = useStepForm();

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ width: "80%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div>
          {activeStep === 0 && <Step1 errors={errors} register={register} />}

          {activeStep === 1 && <Step2 errors={errors} register={register} />}

          {activeStep === 2 && <Step3 errors={errors} register={register} />}

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            {activeStep !== steps.length - 1 && (
              <Button variant="contained" onClick={handleNext}>
                Siguiente
              </Button>
            )}

            {activeStep === steps.length - 1 && (
              <Button variant="contained" color="primary" type="submit">
                Guardar
              </Button>
            )}

            {activeStep !== 0 && (
              <Button variant="contained" onClick={handleBack}>
                Regresar
              </Button>
            )}
          </Box>
        </div>
      </Box>

      <ModalComponent
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={watchFormData}
      />
    </FormContainer>
  );
}
