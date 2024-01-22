import { Sidebar } from "../../components/Sidebar";
import { Modal } from "../../components/Modal";
import { useMapViewModel } from "./view-model";
import * as S from "./styled";
import { Header } from "../../components/Header";
import { AssignTicketModal } from "./AssignTicketModal";

const MapPage = () => {
  const { handlers } = useMapViewModel();

  return (
    <S.MapWrapper>
      <Header />

      <Modal.Root>
        <Sidebar onUse={handlers.onUse} onSetting={handlers.onSetting} />
        <Modal.Content>
          <AssignTicketModal onAssign={handlers.onConfirmUse} />
        </Modal.Content>
      </Modal.Root>
    </S.MapWrapper>
  );
};

export default MapPage;
