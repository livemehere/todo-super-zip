import { CheckButton, RemoveButton, Title, TodoWrap } from "./style";
import { CgRemove } from "react-icons/cg";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import todosSlice from "../../redux/todosSlice";

interface Props {
  id: number;
  text: string;
  isCompleted: boolean;
}
export default function Todo({ id, text, isCompleted }: Props) {
  const dispatch = useAppDispatch();

  return (
    <TodoWrap>
      <CheckButton
        onClick={() => dispatch(todosSlice.actions.toggleComplete({ id }))}
      >
        {isCompleted ? (
          <GrCheckboxSelected className="checkbox" />
        ) : (
          <GrCheckbox className="checkbox" />
        )}
      </CheckButton>

      <Title isCompleted={isCompleted}>
        <Link to={`detail/${id}`}>{text}</Link>
      </Title>
      <RemoveButton onClick={() => dispatch(todosSlice.actions.remove({ id }))}>
        <CgRemove />
      </RemoveButton>
    </TodoWrap>
  );
}
