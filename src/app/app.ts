import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";

import { Layout } from './layout/layout/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Layout],
  template: `
    <app-layout></app-layout>
  `,
  styles: [
    
  ],
})
export class App {
  protected readonly title = signal('Test');
}
