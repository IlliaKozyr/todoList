import React from "react";
import "./style.css";
import { store } from "../../store";
import { observer } from "mobx-react-lite";

export const Inputs = observer(({ keysTodos }) => {
    const [valueTitle, setValueTitle] = React.useState("");
    const [valueDescription, setValueDescription] = React.useState("");
    const [id, setId] = React.useState(1);

    React.useEffect(() => {
        if (keysTodos === 0) {
            setId(1);
        }
    }, [keysTodos]);

    return (
        <form className="form">
            <div className="inputBlock">
                <input
                    type="text"
                    value={valueTitle}
                    id="title"
                    placeholder="Title"
                    onChange={(event) => setValueTitle(event.target.value)}
                />
            </div>

            <div className="inputBlock">
                <input
                    type="text"
                    value={valueDescription}
                    id="description"
                    placeholder="Description"
                    onChange={(event) =>
                        setValueDescription(event.target.value)
                    }
                />
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
                    setId(id + 1);
                }}
                disabled={
                    valueTitle.length === 0 || valueDescription.length === 0
                }
            >
                Add Todo
            </button>
        </form>
    );
});
