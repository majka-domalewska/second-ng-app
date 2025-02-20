import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0);
  Increment() {
    this.counterValue.update((val) => val + 1);
  }

  Reset() {
    this.counterValue.set(0);
  }

  Decrement() {
    this.counterValue.update((val) => val - 1);
  }
}
