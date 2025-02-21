import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { OnInit } from '@angular/core';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
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

  deleteItem(id: number) {
    this.todoItems.update((todos) => todos.filter((todo) => todo.id !== id));
    console.log('item deleted');
  }

  isCompleted(id: number) {
    this.todoItems.update((todos) => {
      const todo = todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
    }
    return todos;
    });
    console.log(`item completed: ${id}`);
  }

  editItem(id: number) {
    const todo = this.todoItems().find((todo) => todo.id === id);
    if (todo) {
      todo.title = prompt('Enter new title', todo.title) || todo.title;
    }
    console.log(`item edited: ${id}`);
  }
}
