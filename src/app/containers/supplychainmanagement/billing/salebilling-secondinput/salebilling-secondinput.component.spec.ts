import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalebillingSecondinputComponent } from './salebilling-secondinput.component';

describe('SalebillingSecondinputComponent', () => {
  let component: SalebillingSecondinputComponent;
  let fixture: ComponentFixture<SalebillingSecondinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalebillingSecondinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalebillingSecondinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
