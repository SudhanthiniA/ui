import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasepermitwithinupComponent } from './purchasepermitwithinup.component';

describe('PurchasepermitwithinupComponent', () => {
  let component: PurchasepermitwithinupComponent;
  let fixture: ComponentFixture<PurchasepermitwithinupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasepermitwithinupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasepermitwithinupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
