import React from "react";
import "./style.css";
import { observer } from "mobx-react-lite";
import { store } from "../../store";
import uuid from "react-uuid";
import { InputSearch } from "../search";

export const TodoList = observer((newTodos) => {


    return (
        <ul className="todoListBlock">
            {Object.values(newTodos.newTodos).map((todo, index) => (
                <li
                    className="todo"
                    key={uuid()}
                    onClick={() => store.setActiveTodo(todo.id)}
                >
                    {console.log(newTodos.newTodos)}
                    <p className="id">#{index + 1}</p>
                    <p className="title">
                        {todo?.title?.length >= 7
                            ? todo.title.slice(0, 7) + "..."
                            : todo.title}
                    </p>
                    <p className="description">
                        {todo.description?.length >= 7
                            ? todo.description.slice(0, 7) + "..."
                            : todo.description}
                    </p>
                    <div
                        className="inputBtnBlock"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => {
                                store.completeTodo(todo.id, !todo.completed);
                            }}
                        />
                        <button onClick={() => {store.removeTodo(todo.id); store.setActiveTodo(null)}}>
                            x
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
});
