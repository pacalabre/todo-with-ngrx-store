import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoFormComponent,
    ListTodosComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(
      {
        appState: reducers,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
