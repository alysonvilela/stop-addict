import { Sidebar } from "../../components/Sidebar";
import { Modal } from "../../components/Modal";
import { useMapViewModel } from "./view-model";
import * as S from "./styled";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

const MapPage = () => {
  const { handlers, states } = useMapViewModel();

  return (
    <S.MapWrapper>
      <Header />

      <Modal.Root>
        <Sidebar onUse={handlers.onUse} onSetting={handlers.onSetting} />
        <Modal.Content>
          <S.ModalWrapper>
            <h1>Tem certeza que essa é uma boa hora para usar seu ticket?</h1>
            <div className="buttons">
              <Modal.Close asChild>
                <Button className="w-full" text="não" />
              </Modal.Close>
              <Modal.Close asChild>
                <Button
                  text="sim"
                  className="w-full"
                  onClick={() => handlers.onConfirmUse()}
                />
              </Modal.Close>
            </div>
          </S.ModalWrapper>
        </Modal.Content>
      </Modal.Root>
    </S.MapWrapper>
  );
};

export default MapPage;
