import styled, { keyframes } from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const contentShow = keyframes`
   from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalPortal = Dialog.Portal;

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const ModalOverlay = styled(Dialog.Overlay)`
  background-color: ${({ theme }) => theme.colors.modal.background};
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
`;

export const ModalContent = styled(Dialog.Content)`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 50;
  display: grid;
  width: 100%;
  max-width: 32rem;
  transform: translateX(-50%) translateY(-50%);
  gap: 1rem;
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: 8px;

  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &[data-state="closed"] {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
`;
