import { Inputs } from "./components/inputs/inputs";
import { ColumnNames } from "./components/columnNames/columnNames";
import { observer } from "mobx-react-lite";
import { CreateList } from "./components/todoList/list.jsx";
import { ModalWindow } from "./components/modalWindow/modal";
import todoListState from "./store/todoListState";
import SortingTodo from "./components/sorting/sorting";

const TodoListApp = observer(() => {
    const { activeTask } = todoListState;

    return (
        <div className="container">
            <div className="listBlock">
                <Inputs />
                <div className="sortSearchBlock">
                    <div className="df">
                    
                        <SortingTodo />
                    </div>
                    <ColumnNames />
                </div>
                
                <CreateList />
            </div>
            <div className="fullDescriptionBlock">
                {activeTask && <ModalWindow activeTask={activeTask} />}
            </div>
        </div>
    );
});

export default TodoListApp;
