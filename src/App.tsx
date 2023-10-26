import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (todo) {
      // setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), todo: todo, isDone: false },
      ]);
      setTodo("");
    }
  };

  return (
    <div className="app">
      <span className="heading">TODO</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

/*
  let personalName: unknown; //THIS IS REcommended over using any
  let name: any;
  let age: number | string;
  let hobbies: string[];
  let others: number | string[];
  let role: [number, string];
  
  let printName: (name: string) => void; //void > undefine , never > does't return any thing
  
  //ALIAS
  type animal = {
    name: string;
    age?: number;
  };
  
  type tiger = animal & { a: string };
  const timo: tiger = { name: "Timo", age: 5, a: "sdfsd" };
  
  interface Person {
    name: string;
    age?: number;
  }
  
  interface Guy extends Person {
    profession: string;
  }
  */
/* 
types that are provided by React
React.ReactNode  > can be for every thing [boolean |React.ReactChild | React.ReactFragment | React.ReactPortal]
*/
