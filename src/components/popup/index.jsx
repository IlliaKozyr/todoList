import React from "react";
import "./style.css";
import { store } from "../../store";

export const Popup = ({ active, setActive }) => {

    const { todos, activeTodo } = store;

    const [editTodoTitle, setEditTodoTitle] = React.useState(todos[activeTodo?.id]?.title);
    const [editTodoDescription, setEditTodoDescription] = React.useState(todos[activeTodo?.id]?.description);

    return (
        <div
            className={active ? "popup active" : "popup"}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? "popupContent active" : "popupContent"}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="editTodoForm">
                    <label>Edit Title:</label>
                    <input
                        type="text"
                        value={editTodoTitle || ""}
                        className="inputForEditTodo"
                        onChange={(event) =>
                            setEditTodoTitle(event.target.value)
                        }
                    />
                    <label>Edit Description:</label>
                    <input
                        type="text"
                        value={editTodoDescription || ""}
                        className="inputForEditTodo"
                        onChange={(event) =>
                            setEditTodoDescription(event.target.value)
                        }
                    />
                    <button
                        className="btnForEditTodo btnClose"
                        onClick={() => {
                            todos[activeTodo?.id].title = editTodoTitle;
                            todos[activeTodo?.id].description =
                                editTodoDescription;
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};
