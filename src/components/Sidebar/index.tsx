import * as S from "./styled";
import { useAddictStore } from "../../store/addict-store";
import { cx } from "../../utils/cx";
import { Modal } from "../Modal";
import { sortAddictByCurrentMonth } from "../../utils/is-in-the-same-year";
import { useTheme } from "styled-components";
interface SidebarProps {
  onUse: (addict_id: string) => void;
  onSetting: () => void;
}

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
    <S.SideBarItem
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
    </S.SideBarItem>
  );
};

export const Sidebar = ({ onUse }: SidebarProps) => {
  const slots = useAddictStore((state) => state.available_slots);
  const usedSlots = useAddictStore((state) => state.used_slots);
  const maxAmount = useAddictStore((state) => state.max_amount_slots);
  const theme = useTheme();

  const monthUsed = usedSlots.sort(sortAddictByCurrentMonth);
  const reachedMax = !slots.length;

  return (
    <S.SideBarWrapper>
      {monthUsed.length > 0 && (
        <S.Section>
          <h2>Usados esse mes</h2>
          <S.UsedListWrapper>
            <S.UsedList>
              {monthUsed.map((i) => {
                return <Ticket key="id" id={i.id} name="cigarro" isUsed />;
              })}
            </S.UsedList>
          </S.UsedListWrapper>
        </S.Section>
      )}
      <S.Section className={cx(monthUsed.length && "out")}>
        {reachedMax ? (
          <h2>
            Pois é :{"("}, você chegou no seu limite, já pensou que pode ter
            estrapolado esse ano?
          </h2>
        ) : (
          <>
            <h2>
              Tickets disponíveis no ano: {slots.length} / {maxAmount}
            </h2>
            <S.UsedListWrapper
              className={cx(!monthUsed.length ? "out" : "off")}
            >
              <S.SideBarList>
                {slots.map((i, idx) => {
                  return (
                    <Modal.Trigger key={`sidebar-${idx}`} asChild>
                      <Ticket
                        id={i.id}
                        name="cigarro"
                        onClick={() => {
                          if (i) {
                            onUse(i.id);
                            return;
                          }
                        }}
                        {...(!monthUsed.length && {
                          dotBg: theme.colors.neutral[200],
                        })}
                      />
                    </Modal.Trigger>
                  );
                })}
              </S.SideBarList>
            </S.UsedListWrapper>
          </>
        )}
      </S.Section>
      {/* 
      <Button
        icon={iconPlus}
        onClick={() => {
          onSetting();
          add("OWNER");
        }}
      /> */}
    </S.SideBarWrapper>
  );
};
