import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  max-width: 800px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
`;
