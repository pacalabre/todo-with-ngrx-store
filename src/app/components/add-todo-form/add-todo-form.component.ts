import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoInterface } from 'src/app/types/todo.interface';
import * as Actions from '../../store/actions';

@Component({
  selector: 'add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css'],
})
export class AddTodoFormComponent {
  todoName: string = '';

  constructor(private readonly store: Store) {}

  updateName = (event: MouseEvent) => {
    this.todoName = (event.target as HTMLInputElement).value;
  };

  submitNewTodo = (event: MouseEvent) => {
    event.preventDefault();
    let newTodo: TodoInterface = {
      id: Date.now(),
      name: this.todoName,
      isComplete: false,
    };
    this.store.dispatch(Actions.addTodo({ todo: newTodo }));
    this.todoName = '';
  };
}
