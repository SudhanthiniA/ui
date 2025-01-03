import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensepaymentComponent } from './licensepayment.component';

describe('LicensepaymentComponent', () => {
  let component: LicensepaymentComponent;
  let fixture: ComponentFixture<LicensepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
