import React from "react";
import "./style.css";
import { observer } from "mobx-react-lite";
import { store } from "../../store";
import uuid from "react-uuid";

export const TodoList = observer((newTodos) => {
    const handleTodoClick = (id) => {
        store.setActiveTodo(id);
        const descriptionBlock = document.querySelector(
            ".fullDescriptionBlock"
        );
        descriptionBlock.classList.add("fullDescriptionBlockActive");
        const listBlock = document.querySelector(".listBlock");
        listBlock.classList.add("listBlockNone");
    };

    return (
        <ul className="todoListBlock">
            {Object.values(newTodos.newTodos).map((todo) => (
                <li
                    className={`todo ${todo.completed ? "completed" : ""}`}
                    key={uuid()}
                    onClick={() => {
                        store.setActiveTodo(todo.id);
                        handleTodoClick(todo.id);
                    }}
                >
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
                            className="checkbox"
                        />
                    </div>
                    <p
                        className={`title ${
                            todo.completed ? "completed-text" : ""
                        }`}
                    >
                        {todo?.title?.length >= 10
                            ? todo.title.slice(0, 10) + "..."
                            : todo.title}
                    </p>
                    <p  className={`desctiption ${
                            todo.completed ? "completed-text" : ""
                        }`}>
                        {todo.description?.length >= 10
                            ? todo.description.slice(0, 10) + "..."
                            : todo.description}
                    </p>
                    <div
                        className="inputBtnBlock"
                        onClick={(event) => event.stopPropagation()}
                        
                    >
                        <button
                            className="btn-close"
                            onClick={() => {
                                store.removeTodo(todo.id);
                                store.setActiveTodo(null);
                            }}
                        >
                            ✕
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
});
