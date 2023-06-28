import { makeAutoObservable } from "mobx";

class TodoStore {
    todos = {};

    activeTodo = null;

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo) {
        this.todos[todo.id] = todo; 
    }

    setActiveTodo(id) {
        this.activeTodo = id ? this.todos[id] : null;
    }

    removeTodo(id) {
        delete this.todos[id];
    }

    completeTodo(index, value) {
        this.todos[index].completed = value;
    }

    editTodo(titleValue, descriptionValue, id) {
        this.todos[id].title = titleValue;
        this.todos[id].description = descriptionValue;
    }
}

export const store = new TodoStore();
