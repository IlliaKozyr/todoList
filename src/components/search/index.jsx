import React from "react";
import { store } from "../../store";

export const InputSearch = ({newTodos, setFilteredTodos, keysTodos}) => {

    const {todos} = store

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

    React.useEffect(() => {
        setFilteredTodos(todos);
    }, [todos, keysTodos]);

    return (
        <div className="dflex">
            <input
                onChange={({ target: { value } }) => todosFilterForSearch(value)}
                type="text"
                placeholder="Search here..."
            ></input>
        </div>
    );
};
