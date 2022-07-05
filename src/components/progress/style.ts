import styled, { css, keyframes } from "styled-components";

export const ProgressBar = styled.div`
  height: 2em;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.text};
  margin: 1em 0;
`;

interface ProgressInnerProps {
  mount: number;
}

export const ProgressInner = styled.div<ProgressInnerProps>`
  display: flex;
  align-items: center;
  padding-left: 0.5em;
  background-color: ${({ theme }) => theme.colors.blue};
  height: 100%;
  width: ${({ mount }) => `${mount}%`};
  transition: all 1s;
  ${({ mount }) =>
    mount > 80 &&
    mount < 100 &&
    css`
      @keyframes shake {
        0% {
          transform: translate(1px, 1px) rotate(0deg);
        }
        10% {
          transform: translate(-1px, -2px) rotate(-1deg);
        }
        20% {
          transform: translate(-3px, 0px) rotate(1deg);
        }
        30% {
          transform: translate(3px, 2px) rotate(0deg);
        }
        40% {
          transform: translate(1px, -1px) rotate(1deg);
        }
        50% {
          transform: translate(-1px, 2px) rotate(-1deg);
        }
        60% {
          transform: translate(-3px, 1px) rotate(0deg);
        }
        70% {
          transform: translate(3px, 1px) rotate(-1deg);
        }
        80% {
          transform: translate(-1px, -1px) rotate(1deg);
        }
        90% {
          transform: translate(1px, 2px) rotate(0deg);
        }
        100% {
          transform: translate(1px, -2px) rotate(-1deg);
        }
      }
      animation: shake 0.3s infinite linear alternate;
    `}
`;
