import { Component, Input } from '@angular/core';
import { TodoInterface } from 'src/app/types/todo.interface';

@Component({
  selector: 'list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent {
  @Input() listOfTodos: TodoInterface[] = [];
}
