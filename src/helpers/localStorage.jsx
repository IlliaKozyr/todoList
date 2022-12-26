import todoListState from "../store/todoListState"

const saveTodo = () => {

    const {todos} = todoListState

    return(
        localStorage.setItem("todos", JSON.stringify(todos))
    )
}

export default saveTodo