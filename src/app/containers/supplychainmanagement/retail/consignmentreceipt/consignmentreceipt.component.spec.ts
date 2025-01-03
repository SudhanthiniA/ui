import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentreceiptComponent } from './consignmentreceipt.component';

describe('ConsignmentreceiptComponent', () => {
  let component: ConsignmentreceiptComponent;
  let fixture: ComponentFixture<ConsignmentreceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignmentreceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
