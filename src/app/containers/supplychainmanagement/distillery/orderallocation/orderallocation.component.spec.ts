import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderallocationComponent } from './orderallocation.component';

describe('OrderallocationComponent', () => {
  let component: OrderallocationComponent;
  let fixture: ComponentFixture<OrderallocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderallocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
