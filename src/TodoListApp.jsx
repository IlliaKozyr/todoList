import React from "react";
import { Inputs } from "./components/inputs";
import { ColumnNames } from "./components/columnNames";
import { observer } from "mobx-react-lite";
import { TodoList } from "./components/todoList";
import { ModalWindow } from "./components/modalWindow";
import {store} from "./store";

export const TodoListApp = observer(() => {

    const { activeTodo , todos } = store;

    const [filtered, setFiltered] = React.useState([]);

    React.useEffect(() => {
        setFiltered(todos);
    }, [todos]);
 
    const search = (val) => {
        let currentTodos = [],
            newList = [];
        if (val !== "") {
            currentTodos = todos
            newList = currentTodos.filter((todo) => {
                const lc = todo.title.toLowerCase();
                const filter = val.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = todos;
        }
        setFiltered(newList);
    };

    return (
        <div className="container">
            <div className="listBlock">
                <Inputs />
                <div className="sortSearchBlock">
                    <div className="df">
                        {/* <InputSearch {...{ search }}/> */}
                        {/* <SortingTodo /> */}
                    </div>
                    <ColumnNames />
                </div>
                <TodoList array={store.todos}/>
                {/* todos={filtered} */}
            </div>
            <div className="fullDescriptionBlock">
                {activeTodo && <ModalWindow activeTodo={activeTodo} array={todos}/>}
            </div>
        </div>
    );
});

