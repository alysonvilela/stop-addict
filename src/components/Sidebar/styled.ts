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

  @media (min-width: 1024px) {
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
