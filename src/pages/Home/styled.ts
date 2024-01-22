import styled from "styled-components";

export const HomeWrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  aside {
    position: relative;

    p {
      font-size: 9.8rem;
      z-index: 2;
    }

    &::before {
      position: absolute;
      content: " ";
      width: 100%;
      height: 100%;
      top: -50%;
      left: -50%;
      background-color: #33526310;
      border-radius: 32px;
      z-index: 1;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 1.8rem;
  }

  .message {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;

    p {
      font-family: "Inter", Arial, Helvetica, sans-serif;
      font-size: 1.4rem;
    }
  }
`;

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
