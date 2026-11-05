import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContainer } from "./components/TodoContainer";
import TodoHeader from "./components/TodoHeader";
import { useTodo } from "./hooks/useTodo"





function App() {

  const { addTodo, toggleTodoCompleted, filteredTodos, clearCompleted, setFilter, filter, clearTodo } = useTodo();

  return (
    <TodoContainer>

      <TodoHeader></TodoHeader>

      <TodoForm addTodo={addTodo}></TodoForm>

      <TodoList todoList={filteredTodos} toggleTodoCompleted={toggleTodoCompleted} setFilter={setFilter} filter={filter} clearCompleted={clearCompleted} clearTodo={clearTodo}></TodoList>
    </TodoContainer>
  )
}

export default App
