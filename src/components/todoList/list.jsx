import React from "react";
import "./listStyle.css";
import { observer } from "mobx-react-lite";
import todoListState from "../../store/todoListState";
import saveTodo from "../../helpers/localStorage";

export const CreateList = observer((props) => {
    const { todos, setTodo } = todoListState;

    return (
        <ul className="todoListBlock">
            {props.todos.map((todo) => (
                <li
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
                    <div className="inputBtnBlock">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => todoListState.completeTodo(todo.id)}
                        />
                        <button
                            onClick={() => (
                                todoListState.removeTodo(todo.id), saveTodo()
                            )}
                        >
                            x
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
});
