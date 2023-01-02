import React from "react";
import './style.css'
import { observer } from "mobx-react-lite";
import { store } from "../../store";

export const ModalWindow = observer((activeTodo, array) => {

    const { title, description, id, completed } = activeTodo.activeTodo;
    const { todos } = store;
    const [complete, setComplete] = React.useState(false);

    React.useEffect(() => {
        completeFunc();
    }, [activeTodo.activeTodo.completed]);


    const completeFunc = () => {
        if (todos[id - 1]?.completed) {
            setComplete(true);
        } else {
            setComplete(false);
        }
    };

    const modalRemove = () => {
        if(Object.keys(todos).length === 0) {
            store.setTodo(null)
            document.getElementById("modalWindowsBlock").style.display = "none"
        } else {
            document.getElementById("modalWindowsBlock").style.display = "block"
        }
    }

    React.useEffect(() => {
        modalRemove()
    }, [store.activeTodo])


    return (
        <div className="modalWindowsBlock" id="modalWindowsBlock">
            <p className="todoTitle">{title}</p>
            <div className="df descriptionBlock">
                <p className="gray setting">description:</p>
                <p className="setting">{description}</p>
            </div>
            <div className="dflex">
                <p className="gray">status:</p>
                <p>{complete ? "done" : "not ready"}</p>
            </div>
            <div className="btnBlock">
                <button
                    className="btnClose"
                    onClick={() => (store.setTodo(null))}
                >
                    Close
                </button>
            </div>
        </div>
    );
});
