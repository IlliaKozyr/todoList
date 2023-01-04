import "./style.css";
import { store } from "../../store";

export const SortingTodos = (props) => {

    const { todos } = store;

    const select = document.getElementById("selectHTML");

    return (
        <div>
            <select id="selectHTML" defaultValue={"firstNew"}>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="firstNew">First New</option>
                <option value="firstOld">First Old</option>
            </select>
            <button onClick={() => props.sorting(todos, select.value)}>
                Sorting
            </button>
        </div>
    );
};
