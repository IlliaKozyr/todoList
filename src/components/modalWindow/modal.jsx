import React from "react";
import "./modalStyle.css";
import { observer } from "mobx-react-lite";
import todoListState from "../../store/todoListState";

export const ModalWindow = observer((activeTask) => {

    const { title, description, id } = activeTask.activeTask;

    const { todos } = todoListState;

    const [complete, setComplete] = React.useState("");

    React.useEffect(() => {
        completeFunc();
    }, [todos[id - 1]?.completed]);

    const completeFunc = () => {
        if (todos[id - 1]?.completed) {
            setComplete(true);
        } else {
            setComplete(false);
        }
    };

    console.log(activeTask.activeTask)

    const modalRemove = () => {
        if(todos.length === 0) {
            todoListState.activeTask = null;
            document.getElementById("modalWindowsBlock").style.display = "none"
        } else {
            document.getElementById("modalWindowsBlock").style.display = "block"
        }
    }

    React.useEffect(() => {
        modalRemove()
    }, [todos])


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
                    onClick={() => (todoListState.setTodo(null))}
                >
                    Close
                </button>
            </div>
        </div>
    );
});
