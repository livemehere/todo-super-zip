import {
  ChangeEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Input, TextArea } from "../components/home/style";
import Progress from "../components/progress";
import Todo from "../components/todo";
import { TodoList } from "../components/todo/style";
import todosSlice, { TodoType } from "../redux/todosSlice";
import useForm from "../hooks/useForm";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function Home() {
  const [input, handleChange, reset] = useForm({
    text: "",
    description: "",
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
        description: input.description,
      })
    );
  }, [input, dispatch]);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (!input.text) return;
    createTodo();
    reset();
  };

  const onEnterPress: React.KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key == "Enter" && e.shiftKey == false) {
      e.preventDefault();
      handleSubmit(e);
    }
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
        <TextArea
          cols={30}
          rows={10}
          value={input.description}
          onChange={(e) => handleChange(e, "description")}
          onKeyDown={onEnterPress}
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
