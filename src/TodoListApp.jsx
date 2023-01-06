import React from "react";
import { store } from "./store";
import { Inputs } from "./components/inputs";
import { ColumnNames } from "./components/columnNames";
import { observer } from "mobx-react-lite";
import { TodoList } from "./components/todoList";
import { ModalWindow } from "./components/modalWindow";
import { SortingTodos } from "./components/sorting";
import { InputSearch } from "./components/search";
import { PaginationComponent } from "./components/pagination";
import { NumberOfTodosPerPage } from "./components/numberOfTodosPerPage";

export const TodoListApp = observer(() => {
    const { activeTodo, todos } = store;
    let newTodos = {};

    const [filteredTodos, setFilteredTodos] = React.useState([]);
    const keysTodos = Object.keys(todos).length;

    const [currentPage, setCurrentPage] = React.useState(1);
    const [todosPerPage, setTodosPerPage] = React.useState(10);

    const lastTodoIndex = currentPage * todosPerPage;
    const firstTodoIndex = lastTodoIndex - todosPerPage;
    const currentTodos = Object.values(filteredTodos).slice(
        firstTodoIndex,
        lastTodoIndex
    );

    console.log(currentTodos)

    return (
        <div className="container">
            <div className="listBlock">
                <Inputs />
                <div className="sortSearchBlock">
                    <div className="df">
                        <InputSearch
                            newTodos={newTodos}
                            setFilteredTodos={setFilteredTodos}
                            keysTodos={keysTodos}
                        />
                        <SortingTodos
                            newTodos={currentTodos}
                            setFilteredTodos={setFilteredTodos}
                        />
                    </div>
                    <ColumnNames />
                </div>
                <TodoList newTodos={currentTodos} />
                <div className="paginationContainer">
                    <PaginationComponent
                        todosPerPage={todosPerPage}
                        totalTodos={keysTodos}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                    <NumberOfTodosPerPage setTodosPerPage={setTodosPerPage} />
                </div>
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
