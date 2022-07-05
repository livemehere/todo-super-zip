import {
  ChangeEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Input } from "../components/home/style";
import Progress from "../components/progress";
import Todo from "../components/todo";
import { TodoList } from "../components/todo/style";
import useForm from "../hooks/useForm";

export default function Home() {
  const [input, handleChange, reset] = useForm({
    text: "",
  });

  const [todos, setTodos] = useState([
    { id: 1, text: "todo1", isComplete: false },
    { id: 2, text: "todo2", isComplete: true },
    { id: 3, text: "todo3", isComplete: false },
  ]);

  const createTodo = useCallback(() => {
    const data = { id: Date.now(), text: input.text, isComplete: false };
    setTodos((prev) => [...prev, data]);
  }, [input]);

  const handleComplete = useCallback(
    (id: number) => {
      const data = [...todos].map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
      setTodos(data);
    },
    [todos]
  );

  const handleDelete = (id: number) => {
    const data = [...todos].filter((todo) => todo.id !== id);
    setTodos(data);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    createTodo();
    reset();
  };
  return (
    <>
      <Progress />
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
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        ))}
      </TodoList>
    </>
  );
}
