import {
  ChangeEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Input } from "../components/home/style";
import Progress from "../components/progress";
import Todo from "../components/todo";
import { TodoList } from "../components/todo/style";
import todosSlice, { TodoType } from "../redux/todosSlice";
import useForm from "../hooks/useForm";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function Home() {
  const [input, handleChange, reset] = useForm({
    text: "",
  });

  const todos = useAppSelector((state) => state.todos.entities);
  const dispatch = useAppDispatch();

  const retio = useMemo(() => {
    const completedCnt = todos.filter(
      (todo) => todo.isComplete === true
    ).length;
    return (completedCnt / todos.length) * 100;
  }, [todos]);

  const createTodo = useCallback(() => {
    dispatch(
      todosSlice.actions.create({
        text: input.text,
        description: "내용을 채워주세요",
      })
    );
  }, [input, dispatch]);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    createTodo();
    reset();
  };
  return (
    <>
      <Progress mount={retio} />
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="새로운 목표를 적어보세요!"
          value={input.text}
          onChange={(e) => handleChange(e, "text")}
        />
      </form>
      <TodoList>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isComplete}
          />
        ))}
      </TodoList>
    </>
  );
}
