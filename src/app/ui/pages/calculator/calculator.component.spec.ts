import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { ResultScreenComponent } from '../../shared/result-screen/result-screen.component';
import { OperationButtonComponent } from '../../shared/operation-button/operation-button.component';
import { NumericButtonComponent } from '../../shared/numeric-button/numeric-button.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faDivide, faEquals, faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent, ResultScreenComponent, OperationButtonComponent, NumericButtonComponent, FaIconComponent]
    });
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getOperation should return the correct icon depending on the operation type', () => {
    component.getOperation(1);
    expect(component.icon).toBe(faPlus);

    component.getOperation(2);
    expect(component.icon).toBe(faMinus);

    component.getOperation(3);
    expect(component.icon).toBe(faXmark);

    component.getOperation(4);
    expect(component.icon).toBe(faDivide);

    component.getOperation(5);
    expect(component.icon).toBe(faEquals);
  })

  it('#getValue should change the result screen status to \'operating\'', () => {
    component.getValue(1);
    component.icon = faPlus;
    fixture.detectChanges();
    expect(component.resultScreenStatus).toBe('operating');
  });

  // Este es uno de los dos tests que están fallando
  it('#getValue should concatenate value1', () => {
    component.icon = faPlus;
    const numericButton = fixture.nativeElement.querySelector('app-numeric-button');

    for (let i = 1; i <= 3; i++) {
      console.log(i);
      numericButton.setAttribute('value', i);
      numericButton.click();
      fixture.detectChanges();
    }

    expect(component.value1).toBe(123);
    expect(component.value2).toEqual(null);
    expect(component.operation).toEqual(null);
  });

  // Este es el otro
  it('#getValue should concatenate value2', () => {
    component.icon = faPlus;
    component.value1 = 100;
    component.operation = 1;
    const numericButton = fixture.nativeElement.querySelector('app-numeric-button');

    for (let i = 1; i <= 3; i++) {
      console.log(i);
      numericButton.setAttribute('value', i);
      numericButton.click();
      fixture.detectChanges();
    }

    expect(component.value2).toEqual(456);
  });

  it('#getResult should change the result screen status to \'displayResult\'', () => {
    component.getResult();
    fixture.detectChanges();
    expect(component.resultScreenStatus).toBe('displayResult');
  });

  it('#getResult should assign the result of the calculation to the result property', () => {
    component.value1 = 2;
    component.value2 = 3;
    component.operation = 1;
    component.getResult();
    fixture.detectChanges();
    expect(component.result).toBe(5);
  });

  it('#clear should change the result screen status to \'initial\'', () => {
    component.clear();
    fixture.detectChanges();
    expect(component.resultScreenStatus).toBe('initial');
  });

  it('#clear should change values to null', () => {
    component.clear();
    fixture.detectChanges();
    expect(component.value1).toEqual(null);
    expect(component.value2).toEqual(null);
    expect(component.operation).toEqual(null);
    expect(component.icon).toEqual(null);
  })
});
