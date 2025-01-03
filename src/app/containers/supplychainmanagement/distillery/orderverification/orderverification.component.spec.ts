import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderverificationComponent } from './orderverification.component';

describe('OrderverificationComponent', () => {
  let component: OrderverificationComponent;
  let fixture: ComponentFixture<OrderverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
