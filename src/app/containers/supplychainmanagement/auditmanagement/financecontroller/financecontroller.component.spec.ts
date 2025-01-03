import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancecontrollerComponent } from './financecontroller.component';

describe('FinancecontrollerComponent', () => {
  let component: FinancecontrollerComponent;
  let fixture: ComponentFixture<FinancecontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancecontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancecontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
