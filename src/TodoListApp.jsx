import React, { useState } from "react";
import { store } from "./store";
import { Inputs } from "./components/inputs";
import { observer } from "mobx-react-lite";
import { TodoList } from "./components/todoList";
import { ModalWindow } from "./components/modalWindow";
import { SortingTodos } from "./components/sorting";
import { InputSearch } from "./components/search";
import { PaginationComponent } from "./components/pagination";
import { NumberOfTodosPerPage } from "./components/numberOfTodosPerPage";
import { Popup } from "./components/popup";

export const TodoListApp = observer(() => {
    const { activeTodo, todos } = store;

    const [filteredTodos, setFilteredTodos] = React.useState([]);
    const keysTodos = Object.keys(todos).length;

    const [currentPage, setCurrentPage] = React.useState(1);
    const [todosPerPage, setTodosPerPage] = React.useState(10);

    const numberOfPages = Math.ceil(keysTodos / todosPerPage);
    const lastTodoIndex = currentPage * todosPerPage;
    const firstTodoIndex = lastTodoIndex - todosPerPage;
    const currentTodos = Object.values(filteredTodos).slice(
        firstTodoIndex,
        lastTodoIndex
    );

    const [popupActive, setPopupActive] = useState(false);

    return (
        <div className="container">
            <div className="listBlock">
                <h1>What's the Plan for Today?</h1>
                <Inputs
                    keysTodos={keysTodos}
                    setCurrentPage={setCurrentPage}
                    numberOfPages={numberOfPages}
                    currentPage={currentPage}
                />
                <div className="sortSearchBlock">
                    <InputSearch
                        setFilteredTodos={setFilteredTodos}
                        keysTodos={keysTodos}
                    />
                    <SortingTodos
                        newTodos={currentTodos}
                        setFilteredTodos={setFilteredTodos}
                    />
                </div>
                <TodoList newTodos={currentTodos} />
                <div className="paginationContainer">
                    <PaginationComponent
                        todosPerPage={todosPerPage}
                        totalTodos={keysTodos}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        numberOfPages={numberOfPages}
                    />
                    <NumberOfTodosPerPage
                        setTodosPerPage={setTodosPerPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
            <div className="fullDescriptionBlock ">
                {activeTodo && <ModalWindow setPopupActive={setPopupActive} />}
                <Popup active={popupActive} setActive={setPopupActive} />
            </div>
        </div>
    );
});
