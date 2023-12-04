import { Component, Input } from '@angular/core';
import { faPlus, faDivide, faMinus, faXmark, faEquals } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-operation-button',
  templateUrl: './operation-button.component.html',
  styleUrls: ['./operation-button.component.scss']
})
export class OperationButtonComponent {
  @Input() type!: number;
  icon!: any;

  ngOnInit() {
    this.getIcon(this.type);
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
