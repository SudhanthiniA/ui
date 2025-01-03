import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderrequestfromwarehouseComponent } from './orderrequestfromwarehouse.component';

describe('OrderrequestfromwarehouseComponent', () => {
  let component: OrderrequestfromwarehouseComponent;
  let fixture: ComponentFixture<OrderrequestfromwarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderrequestfromwarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderrequestfromwarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
