import React from "react";
import './style.css'
import { observer } from "mobx-react-lite";
import { store } from "../../store";

export const ModalWindow = observer((newTodos) => {

    const { todos, activeTodo } = store;
    const { title, description, id } = activeTodo;

    console.log(activeTodo, title, id)

    return (
        <div className="modalWindowsBlock" id="modalWindowsBlock">
            <p className="todoTitle">{title}</p>
            <div className="df descriptionBlock">
                <p className="gray setting">description:</p>
                <p className="setting">{description}</p>
            </div>
            <div className="dflex">
                <p className="gray">status:</p>
                <p>{todos[id]?.completed ? "done" : "not ready"}</p>
            </div>
            <div className="btnBlock">
                <button
                    className="btnClose"
                    onClick={() => (store.setActiveTodo(null))}
                >
                    Close
                </button>
            </div>
        </div>
    );
});
