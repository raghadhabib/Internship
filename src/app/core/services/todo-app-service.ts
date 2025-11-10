import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TodoAppService {
  http = inject(HttpClient);
  getTodosFromApi(){
    const url = environment.todoApiUrl; 
    return this.http.get<Array<Todo>>(url);
  }

  
}
