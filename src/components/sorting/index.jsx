import "./style.css";
import { store } from "../../store";

export const SortingTodo = (newTodos) => {

    const { todos } = store;
    const select = document.getElementById("selectHTML");

    const sorting = (todos, selectedSortingItem) => {
        {console.log(Object.values(todos).sort((a, b) => a.title > b.title ? 1 : -1), "todos");}
        switch (selectedSortingItem) {
            case "az":
                store.todos = Object.values(todos).sort((a, b) => a.title > b.title ? 1 : -1);
                break;
            case "za":
                store.todos = Object.values(todos).sort((a, b) => a.title > b.title ? -1 : 1);
                break;
        }
    };

    return (
        <div>
            <select id="selectHTML" defaultValue={"no"}>
                <option value="no">Select</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
            </select>
            <button onClick={() => sorting(todos, select.value)}>
                Sorting
            </button>
        </div>
    );
};
