import styled from "styled-components";
import { Button } from "@mui/material";

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.3s ease-in-out;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  padding-bottom: 10px;
  font-size: 20px;
  text-align: center;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  width: 100%;
`;

export const ModalButton = styled(Button)`
  width: 48%;
`;

export const ColorPicker = styled.input`
  margin-top: 10px;
  padding: 8px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;
