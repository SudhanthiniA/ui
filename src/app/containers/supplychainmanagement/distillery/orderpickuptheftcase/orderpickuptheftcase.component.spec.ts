import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpickuptheftcaseComponent } from './orderpickuptheftcase.component';

describe('OrderpickuptheftcaseComponent', () => {
  let component: OrderpickuptheftcaseComponent;
  let fixture: ComponentFixture<OrderpickuptheftcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpickuptheftcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpickuptheftcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
