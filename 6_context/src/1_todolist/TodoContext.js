import { useState } from "react";
import App from './components/App';
import produce from 'immer';

const TodoContext = () => {
  const [todoList, setTodoList] = useState([
    { no: 1, todo: "일어나기", done: true },
    { no: 2, todo: "씻기", done: false },
    { no: 3, todo: "옷입기", done: false },
  ]);

const addTodo = (todo) => {
  const newNo = todoList.length > 0 ? Math.max(...todoList.map(t => t.no)) + 1 : 1;

  const newItem = { no: newNo, todo: todo, done: false }; 

  setTodoList([...todoList, newItem]);
};

  const deleteTodo = (no) => {
    const newTodoList = todoList.filter(todo => todo.no !== no);
    setTodoList(newTodoList);
  };

  const toggleDone = (no) => {
    const newTodoList = todoList.map(todo =>
      todo.no === no ? { ...todo, done: !todo.done } : todo
    );
    setTodoList(newTodoList);
  };

  return (
    <App
      todoList={todoList}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      toggleDone={toggleDone}
    />
  );
};

export default TodoContext;
