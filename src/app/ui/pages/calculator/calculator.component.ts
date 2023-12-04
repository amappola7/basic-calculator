import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  numericValues: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  operationValues: number[] = [1, 2, 3, 4, 5];

  operation(value1: number, value2: number, operation: number) {
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
}
