import { css, keyframes } from "styled-components";

const justFadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const fadeInFromTop = keyframes`
from {
  opacity: 0;
  transform: translateY(-5rem);
}
to {
  opacity: 1;
}
`;

const fadeOutToLeft = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
  transform: translateX(-10rem);
}
`;

const fadeInFromBottom = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
  transform: translateY(-1rem);
}
`;

export const justFadeInAnimation = css`
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  animation-name: ${justFadeIn};
  animation-fill-mode: forwards;
`;

export const fadeInFromBottomAnimation = css`
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeInFromBottom};
  animation-fill-mode: forwards;
`;

export const fadeInFromLeftAnimation = css`
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeInFromTop};
  animation-fill-mode: forwards;
`;

export const fadeOutToLeftAnimation = css`
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeOutToLeft};
  animation-fill-mode: forwards;
`;
