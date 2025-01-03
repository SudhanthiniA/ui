import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpaymentmisComponent } from './viewpaymentmis.component';

describe('ViewpaymentmisComponent', () => {
  let component: ViewpaymentmisComponent;
  let fixture: ComponentFixture<ViewpaymentmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpaymentmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpaymentmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
