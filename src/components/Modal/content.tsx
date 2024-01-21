import { ReactNode } from "react";
import * as S from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

interface ModalProps {
  children: ReactNode;
}

export const ModalContent = ({ children }: ModalProps) => {
  return (
    <Dialog.Portal>
      <S.Wrapper>
        <S.ModalOverlay />
        <S.ModalContent>{children}</S.ModalContent>
      </S.Wrapper>
    </Dialog.Portal>
  );
};
