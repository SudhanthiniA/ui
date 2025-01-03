import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderrequestfromwholesaleComponent } from './orderrequestfromwholesale.component';

describe('OrderrequestfromwholesaleComponent', () => {
  let component: OrderrequestfromwholesaleComponent;
  let fixture: ComponentFixture<OrderrequestfromwholesaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderrequestfromwholesaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderrequestfromwholesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
