import "./style.css";
import { store } from "../../store";
import React from "react";
import { observer } from "mobx-react-lite";
import uuid from "react-uuid";

export const Inputs = observer(() => {
    const [valueTitle, setValueTitle] = React.useState("");
    const [valueDescription, setValueDescription] = React.useState("");
    const [id, setId] = React.useState(1 + uuid())

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
                        id: id,
                        title: valueTitle,
                        description: valueDescription,
                        completed: false,
                        date: Date.now(),
                    });
                    setValueTitle("");
                    setValueDescription("");
                    setId(String(Number(id[0]) + 1) + String(uuid()));
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
