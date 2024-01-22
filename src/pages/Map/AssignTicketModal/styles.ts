import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;

  h1 {
    font-family: "Inter", Arial, Helvetica, sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
  }

  .buttons {
    display: flex;
    gap: 16px;
  }

  .w-full {
    width: 100%;
  }
`;
