import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditconsignmentreceiptComponent } from './addeditconsignmentreceipt.component';

describe('AddeditconsignmentreceiptComponent', () => {
  let component: AddeditconsignmentreceiptComponent;
  let fixture: ComponentFixture<AddeditconsignmentreceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditconsignmentreceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditconsignmentreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
