import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from "../components/counter/counter";

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  HomeMessage=signal('come from home & i wanna send u to greeting child component');
  keyUpHandle(event: KeyboardEvent){
   console.log(`user press ${event.key}`);
  }
}
