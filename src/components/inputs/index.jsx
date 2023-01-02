import "./style.css";
import {store} from "../../store";
import React from "react";
import { observer } from "mobx-react-lite";

export const Inputs = observer(() => {
    const [valueTitle, setValueTitle] = React.useState("");
    const [valueDescription, setValueDescription] = React.useState("");
    const [arrayIndex, setArrayIndex] = React.useState(0)

    const {todos} = store

    function CreateArray(title, description) {
            this.id = arrayIndex + 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ;
            this.title = title;
            this.description = description;
            this.completed = false;  
    }

    const createArray = new CreateArray(valueTitle, valueDescription);

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
                onClick={() => (
                    store.addTodo(createArray),
                    setValueTitle(""),
                    setValueDescription(""),
                    setArrayIndex(arrayIndex + 1)
                )}
                disabled={
                    valueTitle.length === 0 || valueDescription.length === 0
                }
            >
                Create
            </button>
        </>
    );
});
