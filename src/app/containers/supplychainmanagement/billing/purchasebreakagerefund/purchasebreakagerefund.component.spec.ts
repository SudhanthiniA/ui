import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasebreakagerefundComponent } from './purchasebreakagerefund.component';

describe('PurchasebreakagerefundComponent', () => {
  let component: PurchasebreakagerefundComponent;
  let fixture: ComponentFixture<PurchasebreakagerefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasebreakagerefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasebreakagerefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
