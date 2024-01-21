import styled from "styled-components";
import { Button } from "../../components/Button";

export const MapWrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
`;

export const ModalWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;

  h1 {
    font-family: "Inter", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

  .buttons {
    display: flex;
    gap: 16px;
  }

  .w-full {
    width: 100%;
  }
`;
