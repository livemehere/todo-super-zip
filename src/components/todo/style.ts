import styled from "styled-components";

export const TodoList = styled.ul`
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 3px;
  padding: 0.5em;
  min-height: 50vh;
`;

export const TodoWrap = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5em;
  border-bottom: 1px solid #d2d2d2;

  & > h3 {
    flex: 1;
  }
`;

interface TitleProps {
  isCompleted: boolean;
}

export const Title = styled.h3<TitleProps>`
  text-decoration-line: ${(props) =>
    props.isCompleted ? "line-through" : "none"};
`;

export const CheckButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3em;

  .checkbox path {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms;
  cursor: pointer;
  border: none;
  & svg {
    font-size: 1.5em;
    color: red;
  }
  &:hover {
    transform: scale(1.2);
  }
`;
