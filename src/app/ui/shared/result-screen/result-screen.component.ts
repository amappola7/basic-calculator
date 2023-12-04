import { Component, Input } from '@angular/core';
import { faPlus, faDivide, faMinus, faXmark, faEquals } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.scss']
})
export class ResultScreenComponent {
  icon!: any;

  @Input() value1!: number;
  @Input() value2!: number;
  @Input() operation!: number;
  @Input() result!: number;
  @Input() status: string = 'initial';

  onChanges() {
    this.icon = this.getIcon(this.operation);
  }

  getIcon(type: number): void {
    switch(type) {
      case 1:
        this.icon = faPlus;
        break;
      case 2:
        this.icon = faMinus;
        break;
      case 3:
        this.icon = faXmark;
        break;
      case 4:
        this.icon = faDivide;
        break;
      case 5:
        this.icon = faEquals;
        break;
    }
  }
}
