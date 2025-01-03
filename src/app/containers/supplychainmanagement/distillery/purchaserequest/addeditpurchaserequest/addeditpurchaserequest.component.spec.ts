import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditpurchaserequestComponent } from './addeditpurchaserequest.component';

describe('AddeditpurchaserequestComponent', () => {
  let component: AddeditpurchaserequestComponent;
  let fixture: ComponentFixture<AddeditpurchaserequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditpurchaserequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditpurchaserequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
