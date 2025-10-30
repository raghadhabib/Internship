import { Component , OnInit} from '@angular/core';
import { inject , signal } from '@angular/core';
import { TodoAppService } from '../services/todo-app-service';
import { Todo } from '../model/todo.type';
import { catchError, filter } from 'rxjs/operators';
import { TodosItem } from '../components/todos-item/todos-item';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter-pipe';


@Component({
  selector: 'app-todos',
  imports: [TodosItem , FormsModule, FilterPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements  OnInit {
  todoservice = inject(TodoAppService);
  todoItems = signal<Array<Todo>>( []);
  searchTerm = signal<string>('');


  ngOnInit(): void {
   this.todoservice.getTodosFromApi()
   .pipe(
    catchError((error) => {
      console.log('Error fetching todos:', error);
      throw error;
    })
   ).subscribe(todos => {
     this.todoItems.set(todos);
   });
  }
  
   updateTodoItem(todoItem: Todo){

    this.todoItems.update(Todos => {
      return Todos.map(t => {
        if(t.id === todoItem.id){
          return {
            ...t,
            completed: !t.completed
          };
        }
        return t;
      });

   });
   }        }
      


