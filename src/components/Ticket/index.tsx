import { cx } from "../../utils/cx";
import * as S from "./styles";

interface TicketProps {
  id: string;
  name: string;
  isUsed?: boolean;
  dotBg?: string;
  onClick?: () => void;
}

export const Ticket = ({ id, name, isUsed, dotBg, onClick }: TicketProps) => {
  const newId = id.slice(0, 7);

  return (
    <S.Wrapper
      className={cx("filled", isUsed && "used")}
      dotBg={dotBg}
      onClick={onClick}
    >
      <div className="ticket-content">
        <div className="title">
          <p>ticket</p>
          <span>{name}</span>
        </div>
        <p className="id">{newId}</p>
      </div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </S.Wrapper>
  );
};
