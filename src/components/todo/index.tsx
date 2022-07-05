import { CheckButton, RemoveButton, Title, TodoWrap } from "./style";
import { CgRemove } from "react-icons/cg";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  text: string;
  isCompleted: boolean;
  handleComplete: (id: number) => void;
  handleDelete: (id: number) => void;
}
export default function Todo({
  id,
  text,
  isCompleted,
  handleComplete,
  handleDelete,
}: Props) {
  return (
    <TodoWrap>
      <CheckButton onClick={() => handleComplete(id)}>
        {isCompleted ? (
          <GrCheckboxSelected className="checkbox" />
        ) : (
          <GrCheckbox className="checkbox" />
        )}
      </CheckButton>

      <Title isCompleted={isCompleted}>
        <Link to={`detail/${id}`}>{text}</Link>
      </Title>
      <RemoveButton onClick={() => handleDelete(id)}>
        <CgRemove />
      </RemoveButton>
    </TodoWrap>
  );
}
