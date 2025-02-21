import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> =[
    {
      id: 1,
      title: 'Todo 1',
      completed: false,
      userId: 1
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: true,
      userId: 1
    },
    {
      id: 3,
      title: 'Todo 3',
      completed: false,
      userId: 2
    },
    {
      id: 4,
      title: 'Todo 4',
      completed: true,
      userId: 2
    },
    {
      id: 5,
      title: 'Todo 5',
      completed: false,
      userId: 3
    },
    {
      id: 6,
      title: 'Todo 6',
      completed: true,
      userId: 3
    }
  ]
  constructor() { }
}
