import React from "react";
import * as S from "./styles";
import { Modal } from "../../../components/Modal";
import { Button } from "../../../components/Button";

interface AssignTicketModalProps {
  onAssign: () => void;
}

export const AssignTicketModal = ({ onAssign }: AssignTicketModalProps) => {
  return (
    <S.ModalWrapper>
      <h1>Tem certeza que essa é uma boa hora para usar seu ticket?</h1>
      <div className="buttons">
        <Modal.Close asChild>
          <Button className="w-full" text="não" />
        </Modal.Close>
        <Modal.Close asChild>
          <Button text="sim" className="w-full" onClick={onAssign} />
        </Modal.Close>
      </div>
    </S.ModalWrapper>
  );
};
