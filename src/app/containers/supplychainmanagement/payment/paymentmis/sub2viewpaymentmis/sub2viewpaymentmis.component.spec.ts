import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub2viewpaymentmisComponent } from './sub2viewpaymentmis.component';

describe('Sub2viewpaymentmisComponent', () => {
  let component: Sub2viewpaymentmisComponent;
  let fixture: ComponentFixture<Sub2viewpaymentmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sub2viewpaymentmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sub2viewpaymentmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
