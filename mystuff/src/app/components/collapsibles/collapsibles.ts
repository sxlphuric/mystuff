import { Component, inject } from '@angular/core';
import { Business } from '../../service/business';

@Component({
  selector: 'app-collapsibles',
  imports: [],
  templateUrl: './collapsibles.html',
  styleUrl: './collapsibles.scss',
})
export class Collapsibles {
  public readonly business = inject(Business)

}
