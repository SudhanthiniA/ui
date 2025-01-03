import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpickingComponent } from './orderpicking.component';

describe('OrderpickingComponent', () => {
  let component: OrderpickingComponent;
  let fixture: ComponentFixture<OrderpickingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpickingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
