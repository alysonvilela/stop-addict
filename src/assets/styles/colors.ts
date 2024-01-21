import { css } from "styled-components";

export const colors = {
  primary: {
    default: "var(--color-primary-default)",
    dark: "var(--color-primary-dark)",
    transparent: "var(--color-primary-transparent)",
  },
  auction: {
    default: "var(--color-auction-default)",
    dark: "var(--color-auction-dark)",
  },
  tickets: {
    bg: "var(--color-tickets-bg)",
    detail: "var(--color-tickets-detail)",
  },
  neutral: {
    100: "var(--color-neutral-100)",
    200: "var(--color-neutral-200)",
    300: "var(--color-neutral-300)",
    400: "var(--color-neutral-400)",
    500: "var(--color-neutral-500)",
    600: "var(--color-neutral-600)",
    700: "var(--color-neutral-700)",
    800: "var(--color-neutral-800)",
    900: "var(--color-neutral-900)",
    1000: "var(--color-neutral-1000)",
    1100: "var(--color-neutral-1100)",
  },
  modal: {
    background: "var(--color-modal-background)",
  },
};

export const rootColors = css`
  :root {
    /* PRIMARY */
    --color-primary-default: #00abd6;
    --color-primary-dark: #00254a;
    --color-primary-transparent: #0059d67a;

    /* AUCTION */
    --color-auction-default: #ff3d71;
    --color-auction-dark: #db2c66;

    /* TICKETS */
    --color-tickets-bg: #c59b77;
    --color-tickets-detail: #927258;

    /* NEUTRALS */
    --color-neutral-100: #ffffff;
    --color-neutral-200: #fefefe;
    --color-neutral-300: #edf1f7;
    --color-neutral-400: #e4e9f2;
    --color-neutral-500: #c5cee0;
    --color-neutral-600: #8f9bb3;
    --color-neutral-700: #2e3a59;
    --color-neutral-800: #222b45;
    --color-neutral-900: #192038;
    --color-neutral-1000: #151a30;
    --color-neutral-1100: #101426;

    /* MODAL */
    --color-modal-background: #00000059;
  }
`;
