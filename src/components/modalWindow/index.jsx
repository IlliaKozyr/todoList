import React from "react";
import './style.css'
import { observer } from "mobx-react-lite";
import { store } from "../../store";
import editPencil from "./image/editPencil.svg"

export const ModalWindow = observer(({setPopupActive}) => {

    const { todos, activeTodo } = store;
    const { title, description, id } = activeTodo;

    return (
        <div className="modalWindowsBlock" id="modalWindowsBlock">
            <button className="editTodoButton" onClick={() => setPopupActive(true)}><img src={editPencil} className="editTodoPencil" alt="edit todo, pencil"/></button>
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
