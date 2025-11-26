import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Collapsibles } from './components/collapsibles/collapsibles';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Collapsibles],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mystuff');
}
