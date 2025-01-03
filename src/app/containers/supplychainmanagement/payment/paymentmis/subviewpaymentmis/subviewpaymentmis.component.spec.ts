import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubviewpaymentmisComponent } from './subviewpaymentmis.component';

describe('SubviewpaymentmisComponent', () => {
  let component: SubviewpaymentmisComponent;
  let fixture: ComponentFixture<SubviewpaymentmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubviewpaymentmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubviewpaymentmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
