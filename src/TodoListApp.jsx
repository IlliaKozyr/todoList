import React from "react";
import { store } from "./store";
import { Inputs } from "./components/inputs";
import { ColumnNames } from "./components/columnNames";
import { observer } from "mobx-react-lite";
import { TodoList } from "./components/todoList";
import { ModalWindow } from "./components/modalWindow";
import { SortingTodos } from "./components/sorting";
import { InputSearch } from "./components/search";

export const TodoListApp = observer(() => {
    const { activeTodo, todos } = store;
    const [filteredTodos, setFilteredTodos] = React.useState([]);

    const keysTodos = Object.keys(todos).length;

    React.useEffect(() => {
        setFilteredTodos(todos);
    }, [todos, keysTodos]);

    let newTodos = {};
    const todosFilterForSearch = (inputSearchValue) => {
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

    const sorting = (todos, selectedSortingItem) => {
        switch (selectedSortingItem) {
            case "az":
                newTodos = Object.values(todos).sort((a, b) =>
                    a.title > b.title ? 1 : -1
                );
                setFilteredTodos(newTodos);
                break;
            case "za":
                newTodos = Object.values(todos).sort((a, b) =>
                    a.title > b.title ? -1 : 1
                );
                setFilteredTodos(newTodos);
                break;
            case "firstOld":
                newTodos = Object.values(todos).sort((a, b) =>
                    a.date > b.date ? -1 : 1
                );
                setFilteredTodos(newTodos);
                break;
            default:
                case "firstNew":
                    newTodos = Object.values(todos).sort((a, b) =>
                        a.date > b.date ? 1 : -1
                    );
                    setFilteredTodos(newTodos);
                    break;
        }
    };

    return (
        <div className="container">
            <div className="listBlock">
                <Inputs />
                <div className="sortSearchBlock">
                    <div className="df">
                        <InputSearch {...{ todosFilterForSearch }} />
                        <SortingTodos {...{ sorting }} />
                    </div>
                    <ColumnNames />
                </div>
                <TodoList newTodos={filteredTodos} />
            </div>
            <div className="fullDescriptionBlock">
                {activeTodo && (
                    <ModalWindow
                        activeTodo={activeTodo}
                        newTodos={filteredTodos}
                    />
                )}
            </div>
        </div>
    );
});
