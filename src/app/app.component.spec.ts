import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './ui/pages/calculator/calculator.component';
import { ResultScreenComponent } from './ui/shared/result-screen/result-screen.component';
import { OperationButtonComponent } from './ui/shared/operation-button/operation-button.component';
import { NumericButtonComponent } from './ui/shared/numeric-button/numeric-button.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent, CalculatorComponent, ResultScreenComponent, OperationButtonComponent, NumericButtonComponent, FaIconComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the calculator component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const calculatorComponent = fixture.nativeElement.querySelector('app-calculator');
    expect(calculatorComponent).toBeTruthy();
  })
});
