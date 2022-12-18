import "./inputsStyle.css";
import todoListState from "../../store/todoListState";
import React from "react";
import { observer } from "mobx-react-lite";

export const Inputs = observer(() => {
    const [valueTitle, setValueTitle] = React.useState("");
    const [valueDescription, setValueDescription] = React.useState("");

    function CreateArray(title, description) {
        this.id = todoListState.todos.length + 1;
        this.title = title;
        this.description = description;
        this.completed = false;
    }

    const createArray = new CreateArray(valueTitle, valueDescription);

    return (
        <>
            <div className="inputsBlock">
                <div className="inputBlock">
                    <label className="label">
                        title
                    </label>
                    <input
                        type="text"
                        value={valueTitle}
                        id="title"
                        onChange={(event) => setValueTitle(event.target.value)}
                    />
                </div>

                <div className="inputBlock">
                    <label className="label">
                        description
                    </label>
                    <input
                        type="text"
                        value={valueDescription}
                        id="description"
                        onChange={(event) =>
                            setValueDescription(event.target.value)
                        }
                    />
                </div>
            </div>
            <button
                className="button"
                onClick={() => (todoListState.addTodo(createArray), setValueTitle(""), setValueDescription(""))}
                disabled={
                    valueTitle.length === 0 || valueDescription.length === 0
                }
            >
                Create
            </button>
        </>
    );
});
