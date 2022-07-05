import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Spinner from "../components/spinner";
import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";

export default function Detail() {
  const { id } = useParams();
  const todo = useAppSelector((state) =>
    state.todos.entities.find((todo) => todo.id === +id!)
  );

  return (
    <div>
      <h1 style={{ borderBottom: "1px solid #333" }}>{todo?.text}</h1>
      <p style={{ whiteSpace: "pre-line" }}>{todo?.description}</p>
    </div>
  );
}
