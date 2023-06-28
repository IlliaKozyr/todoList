import React from "react";
import "./style.css";
import { store } from "../../store";

export const Popup = ({ active, setActive }) => {

    const { todos, activeTodo } = store;

    const [valueTodoTitle, setValueTodoTitle] = React.useState();
    const [valueTodoDescription, setValueEditTodoDescription] = React.useState();

    React.useEffect(() => {
        setValueTodoTitle(todos[activeTodo?.id]?.title)
        setValueEditTodoDescription(todos[activeTodo?.id]?.description)
    }, [activeTodo, todos]);

    const handleSave = () => {
        store.editTodo(valueTodoTitle, valueTodoDescription, activeTodo.id);
        setActive(false);
    };

    const handleClose = () => {
        setActive(false); 
    };

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
                    <button
                        className="closeButton btn-close"
                        onClick={handleClose}
                    >
                        ×
                    </button>
                    <label>Edit Title:</label>
                    <input
                        type="text"
                        value={valueTodoTitle || ""}
                        className="inputForEditTodo"
                        onChange={(event) =>
                            setValueTodoTitle(event.target.value)
                        }
                    />
                    <label>Edit Description:</label>
                    <input
                        type="text"
                        value={valueTodoDescription || ""}
                        className="inputForEditTodo"
                        onChange={(event) =>
                            setValueEditTodoDescription(event.target.value)
                        }
                    />
                    <button
                        className="btnForEditTodo"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};
