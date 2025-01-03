import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnfromcustomerComponent } from './returnfromcustomer.component';

describe('ReturnfromcustomerComponent', () => {
  let component: ReturnfromcustomerComponent;
  let fixture: ComponentFixture<ReturnfromcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnfromcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnfromcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
