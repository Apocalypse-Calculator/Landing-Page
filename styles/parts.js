import styled from "styled-components";
import { theme } from "./theme";
import { up } from "styled-breakpoints";

export const Underline = styled.span`
  position: relative;
  display: inline-block;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    left: -0.25em;
    right: -0.25em;
    height: 0.25em;
    bottom: -0.2em;
    z-index: -1;
    background: ${theme.colors.primary};

    ${up("tablet")} {
      height: 0.7em;
      top: auto;
      bottom: -0.2em;
    }
  }
`;

export const Button = styled.a`
  margin-bottom: 1rem;
  background: ${(props) =>
    props.disable ? theme.colors.error : theme.colors.success};
  font-size: ${(props) => (props.disable ? "12px" : "15px")};
  color: white;
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 4px 12px;
  text-align: center;
  text-decoration: none;
  border-radius: 50px;
`;
