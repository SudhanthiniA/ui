import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailbillingComponent } from './retailbilling.component';

describe('RetailbillingComponent', () => {
  let component: RetailbillingComponent;
  let fixture: ComponentFixture<RetailbillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailbillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
