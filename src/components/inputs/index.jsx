import "./style.css";
import { store } from "../../store";
import React from "react";
import { observer } from "mobx-react-lite";
import uuid from "react-uuid";

export const Inputs = observer(() => {
    const [valueTitle, setValueTitle] = React.useState("");
    const [valueDescription, setValueDescription] = React.useState("");

    return (
        <>
            <div className="inputsBlock">
                <div className="inputBlock">
                    <label className="label">title</label>
                    <input
                        type="text"
                        value={valueTitle}
                        id="title"
                        onChange={(event) => setValueTitle(event.target.value)}
                    />
                </div>

                <div className="inputBlock">
                    <label className="label">description</label>
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
                onClick={() => {
                    store.addTodo({
                        id: uuid(),
                        title: valueTitle,
                        description: valueDescription,
                        completed: false,
                    });
                    setValueTitle("");
                    setValueDescription("");
                }}
                disabled={
                    valueTitle.length === 0 || valueDescription.length === 0
                }
            >
                Create
            </button>
        </>
    );
});
