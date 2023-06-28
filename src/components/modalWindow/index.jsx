import React from "react";
import "./style.css";
import { observer } from "mobx-react-lite";
import { store } from "../../store";
import editPencil from "./image/editPencil2.svg";

export const ModalWindow = observer(({ setPopupActive }) => {
    const { todos, activeTodo } = store;
    const { title, description, id } = activeTodo;

    const handleClose = () => {
        store.setActiveTodo(null);
        const descriptionBlock = document.querySelector(
            ".fullDescriptionBlock"
        );
        descriptionBlock.classList.remove("fullDescriptionBlockActive");
        const listBlock = document.querySelector (".listBlock");
        listBlock.classList.remove("listBlockNone");
    };

    return (
        <div className={"modalWindowsBlock"} id="modalWindowsBlock">
            <button
                className="editTodoButton"
                onClick={() => setPopupActive(true)}
            >
                <img
                    src={editPencil}
                    className="editTodoPencil"
                    alt="edit todo, pencil"
                />
            </button>
            <div className="todoFullInformationBlock">
                <h2 className="todoTitle">{title}</h2>
                <div className="descriptionBlock">
                    <p className="setting">{description}</p>
                </div>
                <div className="statusBlock">
                    <p className="gray">status:</p>
                    <p>{todos[id]?.completed ? "done" : "not ready"}</p>
                </div>
            </div>

            <div className="btnBlock">
                <button
                    className="button"
                    onClick={() => {
                        store.setActiveTodo(null);
                        handleClose();
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
});
