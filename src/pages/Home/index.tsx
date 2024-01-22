import * as S from "./styled";
import { Button } from "../../components/Button";

import { useHomeViewModel } from "./view-model";
import { Modal } from "../../components/Modal";
import { CreateUserModal } from "./CreateUserModal";

const HomePage = () => {
  useHomeViewModel();

  return (
    <S.HomeWrapper>
      <aside>
        <p>🛑</p>
      </aside>
      <div className="message">
        <h1>Tô Parando</h1>
        <p>Tem algo que deseja diminuir o ritmo esse ano?</p>
      </div>
      <Modal.Root>
        <Modal.Trigger asChild>
          <Button text="tô dentro" hasShadow />
        </Modal.Trigger>
        <Modal.Content>
          <CreateUserModal />
        </Modal.Content>
      </Modal.Root>
    </S.HomeWrapper>
  );
};

export default HomePage;
