import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./Componnent/TodoItem";
import TodoForm from "./Componnent/TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error(error));
  };

  const deleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((error) => console.error(error));
  };

  const toggleComplete = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        ...todo,
        completed: !todo.completed,
      })
      .then((response) =>
        setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)))
      )
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="w-full mt-10 px-8 py-8 mx-auto shadow lg:w-1/3  bg-white">
          <div className="flex items-center mb-6">
            <h1 className="mr-6 text-4xl font-bold text-purple-600">
              Todo List
            </h1>
          </div>
          <div className="relative">
            <TodoForm addTodo={addTodo} />
          </div>

          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
