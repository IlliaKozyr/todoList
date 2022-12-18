import React from "react";
import "./listStyle.css";
import { observer } from "mobx-react-lite";
import todoListState from "../../store/todoListState";
import { ModalWindow } from "../modalWindow/modal";

export const CreateList = observer(() => {
    
    const { todos } = todoListState;

    return (
        <div className="todoListBlock">
            {todos.map((todo) => (
                <div
                    className="todo"
                    key={todo.id}
                    onClick={() => todoListState.setTodo(todo)}
                >
                    <p className="id">#{todo.id}</p>
                    <p className="title">
                        {todo.title.length >= 7
                            ? todo.title.slice(0, 7) + "..."
                            : todo.title}
                    </p>
                    <p className="description">
                        {todo.description.length >= 7
                            ? todo.description.slice(0, 7) + "..."
                            : todo.description}
                    </p>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => todoListState.completeTodo(todo.id)}
                    />
                </div>
            ))}
        </div>
    );
});
