import React from "react";

export const InputSearch = (props) => {

    return (
        <div className="dflex">
            <input
                onChange={({ target: { value } }) => props.todosFilterForSearch(value)}
                type="text"
                placeholder="Search here..."
            ></input>
        </div>
    );
};
