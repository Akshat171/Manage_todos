import { createContext, useContext } from "react";

export const TodoContext = createContext({
  //property
  todos: [
    {
      id: 1,
      todo: "To do message",
      completed: false,
    },
  ],
  //functionality/methods
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
  //jab bhi useContext use ker rhe hai
  // to usko batana hoga ki kiske baare me baat ker rhe hai
  //   ek context dena hoga
};

export const TodoProvider = TodoContext.Provider;
