import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalebillingComponent } from './salebilling.component';

describe('SalebillingComponent', () => {
  let component: SalebillingComponent;
  let fixture: ComponentFixture<SalebillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalebillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalebillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
