import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditVerificationComponent } from './addedit-verification.component';

describe('AddeditVerificationComponent', () => {
  let component: AddeditVerificationComponent;
  let fixture: ComponentFixture<AddeditVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
