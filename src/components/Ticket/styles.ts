import styled, { css, keyframes } from "styled-components";

const contentShow = keyframes`
   from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.li<{ dotBg?: string }>`
  position: relative;
  background-image: radial-gradient(
      circle at top left,
      transparent 17px,
      ${({ theme }) => theme.colors.tickets.bg} 17px
    ),
    radial-gradient(
      circle at top right,
      transparent 17px,
      ${({ theme }) => theme.colors.tickets.bg} 17px
    ),
    radial-gradient(
      circle at bottom left,
      transparent 17px,
      ${({ theme }) => theme.colors.tickets.bg} 17px
    ),
    radial-gradient(
      circle at bottom right,
      transparent 17px,
      ${({ theme }) => theme.colors.tickets.bg} 17px
    );
  min-height: 110px;
  padding: 16px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  .ticket-content {
    border: 4px solid ${({ theme }) => theme.colors.tickets.detail};
    height: 100%;
    border-radius: 8px;
    display: flex;
    position: relative;

    .title {
      flex: 1;
      padding: 16px;
      text-align: center;
      border-right: 4px solid ${({ theme }) => theme.colors.tickets.detail};

      p {
        line-height: 1.6;
        font-size: 2.5rem;
        font-weight: bolder;
        text-transform: uppercase;
      }

      span {
        text-transform: uppercase;
        display: block;
        letter-spacing: 0.5rem;
      }
    }

    .id {
      font-size: 14px;
      font-family: monospace;
      text-align: center;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotate(-90deg);
      text-transform: uppercase;
    }
  }

  .dot {
    position: absolute;
    border-radius: 999px;
    width: 32px;
    height: 32px;
    z-index: 1;

    ${({ dotBg }) => css`
      background-color: ${dotBg ?? "white"};
    `}

    &:nth-of-type(2) {
      top: -16px;
      right: -16px;
    }

    &:nth-of-type(3) {
      bottom: -16px;
      right: -16px;
    }

    &:nth-of-type(4) {
      top: -16px;
      left: -16px;
    }

    &:nth-of-type(5) {
      bottom: -16px;
      left: -16px;
    }
  }

  &.used {
    opacity: 0.6;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 10px 16px 0px #091e420f;
    transform: scale(1.03);
  }
`;
