import React from "react";
import todoListState from "../../store/todoListState";

const InputSearch = (props) => {
    // const [value, setValue] = React.useState("");

    return (
        <div className="dflex">
            <input
                onChange={({ target: { value } }) => props.search(value)}
                type="text"
                placeholder="Search here..."
            ></input>
            {/* <button onClick={() => todoListState.searchTodo(value)}>Search</button> */}
        </div>
    );
};

export default InputSearch;
