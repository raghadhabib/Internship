import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  counterValue = signal(0);
  Increment() {
    this.counterValue.update(value => value + 1);
  }
  Decrement() {
    this.counterValue.update(value => value - 1);
  }

  Reset() {
    this.counterValue.set(0);
  }
}
