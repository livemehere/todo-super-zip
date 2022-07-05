import { CheckButton, RemoveButton, Title, TodoWrap } from "./style";
import { CgRemove } from "react-icons/cg";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import todosSlice, {
  deleteTodos,
  getTodos,
  completeTodos,
  uncompleteTodos,
} from "../../redux/todosSlice";

interface Props {
  id: number;
  text: string;
  isCompleted: boolean;
}
export default function Todo({ id, text, isCompleted }: Props) {
  const dispatch = useAppDispatch();

  const handleDelete = async (id: number) => {
    await dispatch(deleteTodos(id));
    dispatch(getTodos());
  };

  const handleComplete = async (id: number) => {
    if (!isCompleted) {
      await dispatch(completeTodos(id));
    } else {
      await dispatch(uncompleteTodos(id));
    }
    dispatch(getTodos());
  };

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
