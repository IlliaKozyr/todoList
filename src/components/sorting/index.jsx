import React from "react";
import { store } from "../../store";
import "./style.css";

export const SortingTodos = ({ newTodos, setFilteredTodos }) => {
    const { todos } = store;

    const sorting = (selectedSortingItem) => {
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
                    a.date > b.date ? 1 : -1
                );
                setFilteredTodos(newTodos);
                break;
            default:
            case "firstNew":
                newTodos = Object.values(todos).sort((a, b) =>
                    a.date > b.date ? -1 : 1
                );
                setFilteredTodos(newTodos);
                break;
        }
    };

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        sorting(selectedValue);
    };

    return (
        <div>
            <select
                id="selectHTML"
                defaultValue={"default"}
                className="select"
                onChange={handleSelectChange}
            >
                <option value="default" disabled>
                    Filter
                </option>
                <option value="firstOld">First Old</option>
                <option value="firstNew">First New</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
            </select>
        </div>
    );
};
