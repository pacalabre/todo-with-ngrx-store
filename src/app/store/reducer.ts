import { createReducer, on } from '@ngrx/store';
import { sample } from 'rxjs';
import { TodosStateInterface } from '../types/todoStateInterface';
import * as TodoActions from './actions';

export const initialState: TodosStateInterface = {
  isLoading: false,
  todos: [],
  error: null,
  appState: undefined,
};

export const reducers = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, payload) => ({
    ...state,
    todos: [...state.todos, payload.todo],
  })),
  on(TodoActions.updateTodo, (state, payload) => {
    const updateTodo = state.todos.map((todo) =>
      todo.id === payload.todo.id ? payload.todo : todo
    );
    return {
      ...state,
      todos: updateTodo,
    };
  }),
  on(TodoActions.deleteTodo, (state, payload) => ({
    ...state,
    todos: state.todos.filter((item) => item.id !== payload.deleteItem),
  }))
);
