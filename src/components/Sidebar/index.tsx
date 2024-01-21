import * as S from "./styled";
import { useAddictStore } from "../../store/addict-store";
import { cx } from "../../utils/cx";
import { Modal } from "../Modal";
import { useTheme } from "styled-components";
import { sortAddictByCurrentMonth } from "../../utils/sort-addict-by-current-month";
import { Ticket } from "../Ticket";
interface SidebarProps {
  onUse: (addict_id: string) => void;
  onSetting: () => void;
}

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
          <h2>Esse mês você usou {monthUsed.length} tickets!</h2>
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
            Pois é colega, <br /> Você chegou no seu limite. Logo menos um novo
            ano recomeça, e assim você poderá refazer suas metas.
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
    </S.SideBarWrapper>
  );
};
