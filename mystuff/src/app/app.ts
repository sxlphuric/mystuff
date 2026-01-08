import { Component, signal } from '@angular/core';
import { Collapsibles } from './components/collapsibles/collapsibles';
import { Subdomains } from './components/subdomains/subdomains';

@Component({
  selector: 'app-root',
  imports: [Collapsibles, Subdomains],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mystuff');
}
