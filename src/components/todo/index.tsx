import { CheckButton, RemoveButton, Title, TodoWrap } from "./style";
import { CgRemove } from "react-icons/cg";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

interface Props {
  isCompleted: boolean;
}
export default function Todo({ isCompleted }: Props) {
  return (
    <TodoWrap>
      <CheckButton>
        {isCompleted ? (
          <GrCheckboxSelected className="checkbox" />
        ) : (
          <GrCheckbox className="checkbox" />
        )}
      </CheckButton>
      <Title isCompleted={isCompleted}>할일 제목</Title>
      <RemoveButton>
        <CgRemove />
      </RemoveButton>
    </TodoWrap>
  );
}
