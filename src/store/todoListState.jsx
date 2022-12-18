import { makeAutoObservable, makeObservable } from "mobx";

class TodoList {
    todos = [];
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

    completeTodo(id) {
        this.todos = this.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
    }
}

export default new TodoList();
