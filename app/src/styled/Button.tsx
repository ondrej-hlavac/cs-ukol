import styled, { css } from "styled-components";
import { colors } from ".";

type ButtonProps = {
  variant?: "primary" | "link";
  active?: boolean;
};

const Button = styled.button<ButtonProps>`
  padding: 0.5em 1em;
  font-size: 16px;
  border-radius: 0;
  cursor: pointer;

  & + & {
    border-left: none;
  }

  ${(props) =>
    props.variant === "primary" &&
    css`
      min-width: 100px;
      font-size: 13px;
      background-color: #fff;
      color: ${colors.PRIMARY};
      border: 2px solid ${colors.PRIMARY};
      font-weight: bold;
    `}
  ${(props) =>
    props.variant === "primary" &&
    props.active &&
    css`
      background-color: ${colors.PRIMARY};
      color: #fff;
      font-weight: lighter;
    `}
  ${(props) =>
    props.variant === "link" &&
    css`
      background-color: transparent;
    `}
`;

Button.defaultProps = {
  variant: "primary",
  active: false,
};

export { Button };
