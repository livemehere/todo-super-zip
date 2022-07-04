import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const ColorButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
