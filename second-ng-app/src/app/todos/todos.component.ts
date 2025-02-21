import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { OnInit } from '@angular/core';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }

  todoToggled(todoItem: Todo) {
    this.todoItems.update((todos) => {
      const index = todos.findIndex((todo) => todo.id === todoItem.id);
      todos[index].completed = !todos[index].completed;
      return todos;
    });
  }
}
