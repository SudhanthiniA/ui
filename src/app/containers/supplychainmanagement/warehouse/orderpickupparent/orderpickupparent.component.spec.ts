import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpickupparentComponent } from './orderpickupparent.component';

describe('OrderpickupparentComponent', () => {
  let component: OrderpickupparentComponent;
  let fixture: ComponentFixture<OrderpickupparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpickupparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpickupparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
