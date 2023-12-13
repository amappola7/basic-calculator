import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { ResultScreenComponent } from '../../shared/result-screen/result-screen.component';
import { OperationButtonComponent } from '../../shared/operation-button/operation-button.component';
import { NumericButtonComponent } from '../../shared/numeric-button/numeric-button.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

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
});
