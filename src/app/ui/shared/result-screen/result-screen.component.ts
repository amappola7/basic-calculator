import { Component, Input } from '@angular/core';
import { faPlus, faDivide, faMinus, faXmark, faEquals } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.scss']
})
export class ResultScreenComponent {
  @Input() icon!: any;
  @Input() value1!: number | null;
  @Input() value2!: number | null;
  @Input() result!: number;
  @Input() status: string = 'initial';
}
