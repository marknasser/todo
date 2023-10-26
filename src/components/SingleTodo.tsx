import React, { useState, useRef } from "react";
import { Todo } from "../model";
import { MdDone } from "react-icons/md";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputField = useRef<HTMLInputElement>();
  console.log(inputField.current);

  const handelDone = (ID: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === ID ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handelDelete = (ID: number) => {
    setTodos((prev) => {
      const filtered = prev.filter((todo) => todo.id !== ID);
      return filtered;
    });
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>, ID: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === ID ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputField}
          value={editTodo}
          onChange={(e) => {
            setEditTodo(e.target.value);
          }}
          className="todos__single--text editInput"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div className="">
        <span
          className="icon"
          onClick={() => {
            if (!todo.isDone) {
              setEdit(!edit);
              setTodos(
                todos.map((el) =>
                  el.id === todo.id ? { ...todo, todo: editTodo } : todo
                )
              );
              // const inputField = document.querySelector(".editInput");
              // console.log(inputField);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handelDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => !edit && handelDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
