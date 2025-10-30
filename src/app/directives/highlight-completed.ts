import { Directive, input , effect } from '@angular/core';
import { ElementRef , inject } from '@angular/core';

@Directive({
  selector: '[appHighlightCompleted]'
})
export class HighlightCompleted {
    isCompleted = input<boolean>(false);

    el = inject(ElementRef);

  constructor() { }

  stylesEffects = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.backgroundColor = 'lightgreen';
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = 'green';
    } else {
      this.el.nativeElement.style.backgroundColor = 'transparent';
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.color = 'black';
    }
  });
}
