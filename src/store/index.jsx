import { makeAutoObservable } from "mobx";

class TodoStore {
    todos = {};

    activeTodo = null;

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo) {
        // this.todos[todo.id] = todo; 
        for(let i = 0; i < 1000; i++) {
            const task = {
                completed: false,
                date: 7853456458 + i,
                description: "qwerty", 
                id: i,
                title: "asdfgh"
            }
            this.todos[task.id] = task;
        }
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
