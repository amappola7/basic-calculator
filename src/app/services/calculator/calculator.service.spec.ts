import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    const result = service.calculateOperation(2, 5, 1);
    expect(result).toBe(7);
  });

  it('should subtract two numbers', () => {
    const result = service.calculateOperation(2, 5, 2);
    expect(result).toBe(-3);
  });

  it('should multiply two numbers', () => {
    const result = service.calculateOperation(2, 5, 3);
    expect(result).toBe(10);
  });

  it('should divide two numbers', () => {
    const result = service.calculateOperation(2, 5, 4);
    expect(result).toBe(0.4);
  });
});
