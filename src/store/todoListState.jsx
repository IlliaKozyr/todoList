import { makeAutoObservable } from "mobx";

class TodoList {
    todos = JSON.parse(localStorage.getItem("todos"));
    activeTask = null;

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    setTodo(todo) {
        this.activeTask = todo;
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id) {
        this.todos = this.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
    }
}

export default new TodoList();
