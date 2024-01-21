import styled, { css } from "styled-components";

export const SideBarWrapper = styled.section`
  margin-top: -150px;
  padding: 16px;

  h2 {
    font-weight: 500;
    font-size: 1.6rem;
    color: white;
    opacity: 0.7;
    margin-bottom: 16px;
  }
`;

export const Section = styled.section`
  margin-bottom: 16px;
  &.out {
    h2 {
      color: #6d6463;
      opacity: 1;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SideBarList = styled.ul`
  display: grid;
  gap: 32px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const UsedListWrapper = styled.div`
  padding: 16px;
  background-color: white;
  border-radius: 32px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.05);

  &.out {
    padding: 32px;
  }

  &.off {
    background-color: transparent;
    padding: 0;
    box-shadow: none;
  }
`;

export const UsedList = styled.ul`
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  gap: 32px;
  border-radius: 16px;
`;

export const SideBarItem = styled.li<{ dotBg?: string }>`
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
`;
