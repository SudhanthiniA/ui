import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpickComponent } from './orderpick.component';

describe('OrderpickComponent', () => {
  let component: OrderpickComponent;
  let fixture: ComponentFixture<OrderpickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
