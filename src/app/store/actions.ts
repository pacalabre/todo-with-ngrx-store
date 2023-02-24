import { createAction, props } from '@ngrx/store';
import { TodoInterface } from '../types/todo.interface';

export const addTodo = createAction(
  '[Todo Form] Add Todo',
  props<{ todo: TodoInterface }>()
);

export const updateTodo = createAction(
  '[Todo Form] Update Todo',
  props<{ todo: TodoInterface }>()
);

export const deleteTodo = createAction(
  '[Todo Form] Delete Todo',
  props<{ deleteItem: number }>()
);
