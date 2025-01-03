import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestbasewineComponent } from './purchaserequestbasewine.component';

describe('PurchaserequestbasewineComponent', () => {
  let component: PurchaserequestbasewineComponent;
  let fixture: ComponentFixture<PurchaserequestbasewineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestbasewineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestbasewineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
