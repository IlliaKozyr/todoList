import React from "react";
import './style.css'
import { observer } from "mobx-react-lite";
import { store } from "../../store";

export const TodoList = observer((array) => {

    const { todos } = array;
    // const { id } = activeTodo

    const [complete, setComplete] = React.useState({});

    // React.useEffect(() => {
    //     completeFunc();
    // }, [todos[id - 1]?.completed]);

    // const completeFunc = () => {
    //     if (todos[id - 1]?.completed) {
    //         setComplete(true);
    //     } else {
    //         setComplete(false);
    //     }
    // };

    console.log(array.array, "this")

    return (
        <ul className="todoListBlock">
            {Object.values(array.array).map((todo, index) => (
                
                <li
                    className="todo"
                    key={index}
                    onClick={() => store.setTodo(todo)}
                >
                    {console.log(index)}
                    <p className="id">#{index + 1}</p>
                    <p className="title">
                        {todo?.title?.length >= 7
                            ? todo?.title.slice(0, 7) + "..."
                            : todo?.title}
                    </p>
                    <p className="description">
                        {todo?.description?.length >= 7
                            ? todo?.description.slice(0, 7) + "..."
                            : todo?.description}
                    </p>
                    <div className="inputBtnBlock">
                        <input
                            type="checkbox"
                            checked={complete[index]}
                            onChange={() => (store.completeTodo(index)
                            )}
                        />
                        <button
                            onClick={() => (
                                store.removeTodo(Object.keys(array.array)[index])
                            )}
                        >
                            x
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
});
