import { TodoInterface } from './todo.interface';

export interface TodosStateInterface {
  appState: any;
  isLoading: boolean;
  todos: TodoInterface[];
  error: string | null;
}
