import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  el = inject(ElementRef)
  constructor() {}

  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      console.log('todo is completed');
      this.el.nativeElement.style.backgroundColor = 'lightgrey';
      this.el.nativeElement.style.color = 'grey';
      this.el.nativeElement.style.textDecoration = 'line-through';
    } else {
      this.el.nativeElement.style.backgroundColor = 'white';
      this.el.nativeElement.style.color = 'black';
      this.el.nativeElement.style.textDecoration = 'none';
    }
  })
}
