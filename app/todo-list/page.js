import dynamic from "next/dynamic";

const TodoList = dynamic(() => import("@/components/todo-list"), {
  loading: () => <div>Loading todo list...</div>,
});

export default function TodoListPage() {
  return <TodoList />;
}
