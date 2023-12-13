import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationButtonComponent } from './operation-button.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

describe('OperationButtonComponent', () => {
  let component: OperationButtonComponent;
  let fixture: ComponentFixture<OperationButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationButtonComponent, FaIconComponent]
    });
    fixture = TestBed.createComponent(OperationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
