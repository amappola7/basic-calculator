import { Component } from '@angular/core';
import { faPlus, faDivide, faMinus, faXmark, faEquals } from '@fortawesome/free-solid-svg-icons';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  numericValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  operationValues: number[] = [1, 2, 3, 4];
  value1: number | null = null;
  value2: number | null = null;
  operation: number | null = null;
  resultScreenStatus: string = 'initial';
  result: number = 0;
  icon!: any;

  constructor(
    private calculatorService: CalculatorService
  ) { }

  getOperation(type: number): void {
    this.operation = type;
    switch (type) {
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

  getValue(value: number): void {
    if (this.resultScreenStatus !== 'operating') this.resultScreenStatus = 'operating';
    const strValue = value.toString();

    if (this.operation == null) {
      const beforeValue: string = this.value1 == null ? '' : this.value1.toString();
      this.value1 = parseInt(beforeValue + strValue);
    } else {
      const beforeValue: string = this.value2 == null ? '' : this.value2.toString();
      this.value2 = parseInt(beforeValue + strValue);
    }
  }

  getResult() {
    this.resultScreenStatus = 'displayResult';
    this.result = this.calculatorService.calculateOperation(this.value1!, this.value2!, this.operation!);
  }

  clear() {
    this.resultScreenStatus = 'initial';
    this.value1 = null;
    this.value2 = null;
    this.operation = null;
    this.icon = null;
  }
}
