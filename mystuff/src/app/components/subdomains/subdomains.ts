import { Component, inject } from '@angular/core';
import { Business } from '../../service/business';

@Component({
  selector: 'app-subdomains',
  imports: [],
  templateUrl: './subdomains.html',
  styleUrl: './subdomains.scss',
})
export class Subdomains {
  public readonly business = inject(Business)
}
