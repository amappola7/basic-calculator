import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultScreenComponent } from './result-screen.component';

xdescribe('ResultScreenComponent', () => {
  let component: ResultScreenComponent;
  let fixture: ComponentFixture<ResultScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultScreenComponent]
    });
    fixture = TestBed.createComponent(ResultScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
