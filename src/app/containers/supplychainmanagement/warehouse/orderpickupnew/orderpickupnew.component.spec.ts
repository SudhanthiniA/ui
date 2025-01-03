import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpickupnewComponent } from './orderpickupnew.component';

describe('OrderpickupnewComponent', () => {
  let component: OrderpickupnewComponent;
  let fixture: ComponentFixture<OrderpickupnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpickupnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpickupnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
