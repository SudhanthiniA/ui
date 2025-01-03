import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePermitrequestWithinupComponent } from './purchase-permitrequest-withinup.component';

describe('PurchasePermitrequestWithinupComponent', () => {
  let component: PurchasePermitrequestWithinupComponent;
  let fixture: ComponentFixture<PurchasePermitrequestWithinupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasePermitrequestWithinupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasePermitrequestWithinupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
