import * as S from "./styles";
import { useUserStore } from "../../store/user-store";

export const Header = () => {
  const userName = useUserStore((state) => state.user?.name);
  return (
    <S.Wrapper>
      <h1>Tô parando</h1> {userName && <span>/{userName}</span>}
    </S.Wrapper>
  );
};
