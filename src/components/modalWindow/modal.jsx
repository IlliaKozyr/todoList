import "./modalStyle.css";
import { observer } from "mobx-react-lite";
import todoListState from "../../store/todoListState";

export const ModalWindow = observer((activeTask) => {

    const {title, description, completed, id} = activeTask.activeTask

    return (
        <div className="modalWindowsBlock">
            <p className="todoTitle">{title}</p>
            <div className="df descriptionBlock">
                <p className="gray setting">description:</p>
                <p className="setting">{description}</p>
            </div>
            <div className="df">
                <p className="gray">status:</p>
                <p>{completed ? "done" : "not ready"}</p>
            </div>
            <div className="btnBlock">
            <button className="btnClose" onClick={() => todoListState.setTodo(null)}>Close</button>
            </div>
   
        </div>
    );
});


