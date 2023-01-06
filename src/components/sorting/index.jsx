import "./style.css";
import { store } from "../../store";

export const SortingTodos = ({newTodos, setFilteredTodos}) => {

    const { todos } = store;

    const select = document.getElementById("selectHTML");

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

    return (
        <div>
            <select id="selectHTML" defaultValue={"firstNew"}>
            <option value="firstNew">First New</option>
            <option value="firstOld">First Old</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
            </select>
            <button onClick={() => sorting(select.value)}>
                Sorting
            </button>
        </div>
    );
};
