import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from '../../store/actions';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() name: string = '';
  @Input() isComplete: boolean = false;
  @Input() itemId: number = 0;
  isEditing: boolean = false;
  editedName: string = '';

  constructor(private store: Store) {}
  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.store.dispatch(
        Actions.updateTodo({
          todo: {
            id: this.itemId,
            name: this.editedName,
            isComplete: this.isComplete,
          },
        })
      );
    }
  }

  updateEditedName(event: Event) {
    this.editedName = (event.target as HTMLInputElement).value;
  }

  toggleIsComplete() {
    this.isComplete = !this.isComplete;
    this.store.dispatch(
      Actions.updateTodo({
        todo: { id: this.itemId, name: this.name, isComplete: this.isComplete },
      })
    );
  }

  removeItem() {
    this.store.dispatch(Actions.deleteTodo({ deleteItem: this.itemId }));
  }
}
