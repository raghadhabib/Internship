import { Component, output } from '@angular/core';
import { input } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompleted } from '../../directives/highlight-completed';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todos-item',
  imports: [HighlightCompleted , UpperCasePipe],
  templateUrl: './todos-item.html',
  styleUrl: './todos-item.scss',
})
export class TodosItem {
  todo = input.required<Todo>();
  todotoggled = output<Todo>();

  TodoClicked() {
    
    this.todotoggled.emit(this.todo());
  }
}