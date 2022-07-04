import { FormEventHandler } from "react";
import { Input } from "../components/home/style";
import Todo from "../components/todo";
import { TodoList } from "../components/todo/style";

export default function Home() {
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="새로운 목표를 적어보세요!" />
      </form>
      <TodoList>
        <Todo isCompleted={false} />
        <Todo isCompleted={true} />
        <Todo isCompleted={true} />
        <Todo isCompleted={false} />
        <Todo isCompleted={true} />
        <Todo isCompleted={true} />
        <Todo isCompleted={true} />
        <Todo isCompleted={true} />
        <Todo isCompleted={true} />
        <Todo isCompleted={true} />
        <Todo isCompleted={true} />
        <Todo isCompleted={true} />
        <Todo isCompleted={true} />
        <Todo isCompleted={true} />
        <Todo isCompleted={true} />
        <Todo isCompleted={true} />
      </TodoList>
    </>
  );
}
