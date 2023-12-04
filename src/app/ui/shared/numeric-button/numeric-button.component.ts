import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numeric-button',
  templateUrl: './numeric-button.component.html',
  styleUrls: ['./numeric-button.component.scss']
})
export class NumericButtonComponent {
  @Input() value!: number;
}
