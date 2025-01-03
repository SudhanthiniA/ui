import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpickupaccidentaltpComponent } from './orderpickupaccidentaltp.component';

describe('OrderpickupaccidentaltpComponent', () => {
  let component: OrderpickupaccidentaltpComponent;
  let fixture: ComponentFixture<OrderpickupaccidentaltpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpickupaccidentaltpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpickupaccidentaltpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
