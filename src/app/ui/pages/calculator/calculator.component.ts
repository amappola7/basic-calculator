import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  numericValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  operationValues: number[] = [1, 2, 3, 4];
  value1: number = 0;
  value2: number = 0;
  operation: number = 0;
  resultScreenStatus: string = 'initial';
  result: number = 0;

  calculateOperation(value1: number, value2: number, operation: number) {
    let result = 0;

    switch(operation) {
      case 1:
        result = value1 + value2;
        break;
      case 2:
        result = value1 - value2;
        break;
      case 3:
        result = value1 * value2;
        break;
      case 4:
        result = value1 / value2;
        break;
    };

    return result;
  }

  getOperation(type: number): void {
    this.operation = type;
  }

  getValue(value: number): void {
    const strValue = value.toString();
    this.resultScreenStatus === 'operating' ? '' : this.resultScreenStatus = 'operating' ;

    if (this.operation == 0) {
      const beforeValue: string = this.value1.toString();
      this.value1 = parseInt(beforeValue + strValue);
    } else {
      const beforeValue: string = this.value2.toString();
      this.value2 = parseInt(beforeValue + strValue);
    }
  }

  getResult() {
    this.resultScreenStatus = 'displayResult';
    this.result = this.calculateOperation(this.value1, this.value2, this.operation);
  }

  clear() {
    this.resultScreenStatus = 'initial';
    this.value1 = 0;
    this.value2 = 0;
  }
}
