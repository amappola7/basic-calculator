import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calculateOperation(value1: number, value2: number, operation: number): number {
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
