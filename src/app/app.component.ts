import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoInterface } from './types/todo.interface';
import { TodosStateInterface } from './types/todoStateInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-with-ngrx';
  todos: TodoInterface[] = [];

  constructor(private readonly store: Store<TodosStateInterface>) {
    this.store.subscribe((state) => {
      const store = state;
      this.todos = store.appState.todos;
    });
  }
}
