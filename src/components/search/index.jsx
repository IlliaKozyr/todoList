import React from "react";
import todoListState from "../../store";

const InputSearch = (props) => {

    return (
        <div className="dflex">
            <input
                onChange={({ target: { value } }) => props.search(value)}
                type="text"
                placeholder="Search here..."
            ></input>
        </div>
    );
};

export default InputSearch;
