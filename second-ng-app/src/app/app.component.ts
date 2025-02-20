import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <h1>Welcome to my app</h1>
  <p>My first Angular app</p>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'second-ng-app';
}
