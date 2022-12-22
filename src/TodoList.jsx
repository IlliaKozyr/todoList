import React from "react";
import { Inputs } from "./components/inputs/inputs";
import { ColumnNames } from "./components/columnNames/columnNames";
import { observer } from "mobx-react-lite";
import { CreateList } from "./components/todoList/list.jsx";
import { ModalWindow } from "./components/modalWindow/modal";
import todoListState from "./store/todoListState";
import SortingTodo from "./components/sorting/sorting";
import InputSearch from "./components/search/inputSearch";

const TodoListApp = observer(() => {

    const { activeTask, todos } = todoListState;


    // const [arr] = React.useState(todos);
    // const [filtered, setFiltered] = React.useState([]);

    // React.useEffect(() => {
    //     setFiltered(arr);
    // }, [arr]);

    // const search = (val) => {
    //     let todos = [],
    //         newList = [];
    //     if (val !== "") {
    //         todos = arr;
    //         newList = todos.filter((todo) => {
    //             const lc = todo.title.toLowerCase();
    //             const filter = val.toLowerCase();
    //             return lc.includes(filter);
    //         });
    //     } else {
    //         newList = arr;
    //     }
    //     setFiltered(newList);
    // };

    return (
        <div className="container">
            <div className="listBlock">
                <Inputs />
                <div className="sortSearchBlock">
                    <div className="df">
                        <InputSearch />
                        {/* {...{ search }} */}
                        <SortingTodo />
                    </div>
                    <ColumnNames />
                </div>

                <CreateList />
                {/* arr={filtered} */}
            </div>
            <div className="fullDescriptionBlock">
                {activeTask && <ModalWindow activeTask={activeTask} />}
            </div>
        </div>
    );
});

export default TodoListApp;
