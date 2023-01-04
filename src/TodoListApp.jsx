import React from "react";
import { store } from "./store";
import { Inputs } from "./components/inputs";
import { ColumnNames } from "./components/columnNames";
import { observer } from "mobx-react-lite";
import { TodoList } from "./components/todoList";
import { ModalWindow } from "./components/modalWindow";
import { SortingTodo } from "./components/sorting";
import { InputSearch } from "./components/search";

export const TodoListApp = observer(() => {

    const { activeTodo, todos } = store;
    const [filteredTodos, setFilteredTodos] = React.useState([]);

    React.useEffect(() => {
        setFilteredTodos(todos);
    }, [todos, Object.keys(todos).length]);

    const todosFilterForSearch = (inputSearchValue) => {
        let newTodos = {};
        if (inputSearchValue !== "") {
            newTodos = Object.values(todos).filter((todo) => {
            let lowerCase = todo.title.toLowerCase();
            let filter = inputSearchValue.toLowerCase();
            return lowerCase.includes(filter);
                
            });
        } else {
            newTodos = todos;
        }
        setFilteredTodos(newTodos);
    };

    

    return (
        <div className="container">
            <div className="listBlock">
                <Inputs />
                <div className="sortSearchBlock">
                    <div className="df">
                        <InputSearch {...{ todosFilterForSearch }} />
                        <SortingTodo newTodos={filteredTodos}/>
                    </div>
                    <ColumnNames />
                </div>
                <TodoList newTodos={filteredTodos} />
            </div>
            <div className="fullDescriptionBlock">
                {activeTodo && <ModalWindow activeTodo={activeTodo} newTodos={filteredTodos}/>}
            </div>
        </div>
    );
});
