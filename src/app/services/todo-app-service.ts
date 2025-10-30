import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoAppService {
  http = inject(HttpClient);
  getTodosFromApi(){
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get<Array<Todo>>(url);
  }

  
}
