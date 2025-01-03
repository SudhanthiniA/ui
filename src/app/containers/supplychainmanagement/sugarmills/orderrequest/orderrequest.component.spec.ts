import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderrequestComponent } from './orderrequest.component';

describe('OrderrequestComponent', () => {
  let component: OrderrequestComponent;
  let fixture: ComponentFixture<OrderrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
