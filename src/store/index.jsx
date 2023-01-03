import { makeAutoObservable } from "mobx";

class TodoStore {
    
    todos = {};

    activeTodo = null;

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo) {
        this.todos[todo.id] = todo
    }

    setActiveTodo(id) {
        this.activeTodo = id ? this.todos[id] : null;
    }

    removeTodo(id) {
        delete this.todos[id]; 
    }

    completeTodo(index, value) {
        this.todos[index].completed = value
    }
}

export const store = new TodoStore();


