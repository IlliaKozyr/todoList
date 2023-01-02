import { makeAutoObservable } from "mobx";

class TodoStore {
    todos = {};

    activeTodo = null;

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(array) {
        this.todos[Object.keys(this.todos).length - 1 === -1 ? 0 : Object.values(this.todos)[Object.keys(this.todos).length - 1].id] = array;
    }

    setTodo(todo) {
        this.activeTodo = todo;
    }

    removeTodo(id) {
        delete this.todos[id];
        if (Object.keys(this.todos).length === 0) {
            this.todos = {}
        } 
    }

    completeTodo(index) {
        if(this.todos[index]?.completed) {
            this.todos[index].completed = !this.todos[index].completed
            // console.log("if", this.todos[index].completed)
        } else { 
            this.todos[index].completed = !this.todos[index].completed
            // console.log('else', this.todos[index].completed)
        }
        
    }
}

export const store = new TodoStore();


