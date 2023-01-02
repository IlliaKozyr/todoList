import './style.css'
import todoListState from "../../store";
import saveTodo from "../../helpers/localStorage";

const SortingTodo = () => {
    const { todos } = todoListState;
    const select = document.getElementById("selectHTML");

    const sorting = (arr, selectText) => {
        console.log(arr, 'this arr');
        return selectText === "az"
            ? arr.sort(function (a, b) {
                  if (a.title > b.title) {
                      return 1;
                  }
                  if (a.title < b.title) {
                      return -1;
                  }

                  return 0;
              })
            : selectText === "za"
            ? arr.sort(function (a, b) {
                  if (a.title < b.title) {
                      return 1;
                  }
                  if (a.title > b.title) {
                      return -1;
                  }

                  return 0;
              })
            : selectText === "19"
            ? arr.sort(function (a, b) {
                  if (a.id > b.id) {
                      return 1;
                  }
                  if (a.id < b.id) {
                      return -1;
                  }

                  return 0;
              })
            : arr.sort(function (a, b) {
                  if (a.id < b.id) {
                      return 1;
                  }
                  if (a.id > b.id) {
                      return -1;
                  }

                  return 0;
              }) 
    };

    return (
        <div>
            <select id="selectHTML" defaultValue={"no"}>
                <option value="no">
                    Select
                </option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="19">1-9</option>
                <option value="91">9-1</option>
            </select>
            <button onClick={() => (sorting(todos, select.value), saveTodo())}>
                Sorting
            </button>
        </div>
    );
};

export default SortingTodo;
