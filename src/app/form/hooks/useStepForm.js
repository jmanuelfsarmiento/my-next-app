import { useState } from "react";
import { useForm } from "react-hook-form";

const useStepForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm();

  const watchFormData = watch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const onSubmit = () => {
    setIsModalOpen(true);
  };

  const handleNext = async () => {
    const isValid = await trigger();

    if (isValid) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return {
    handleSubmit,
    register,
    errors,
    watchFormData,
    isModalOpen,
    setIsModalOpen,
    activeStep,
    onSubmit,
    handleNext,
    handleBack,
  };
};

export default useStepForm;
