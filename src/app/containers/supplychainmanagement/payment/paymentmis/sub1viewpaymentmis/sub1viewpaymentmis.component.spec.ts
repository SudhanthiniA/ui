import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub1viewpaymentmisComponent } from './sub1viewpaymentmis.component';

describe('Sub1viewpaymentmisComponent', () => {
  let component: Sub1viewpaymentmisComponent;
  let fixture: ComponentFixture<Sub1viewpaymentmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sub1viewpaymentmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sub1viewpaymentmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
