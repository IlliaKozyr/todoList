import React from "react";
import "./style.css";
import { store } from "../../store";
import { observer } from "mobx-react-lite";

export const Inputs = observer(() => {

    const { todos } = store
    const todosLength = Object.keys(todos).length

    const [valueTitle, setValueTitle] = React.useState("");
    const [valueDescription, setValueDescription] = React.useState("");
    const [id, setId] = React.useState(1);

    React.useEffect(() => {
        if(todosLength === 0) {
            setId(1)
        }
      }, [todosLength]); 

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
                    setId(id + 1);
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
