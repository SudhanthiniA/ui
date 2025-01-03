import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseforblacklistedvehicleComponent } from './caseforblacklistedvehicle.component';

describe('CaseforblacklistedvehicleComponent', () => {
  let component: CaseforblacklistedvehicleComponent;
  let fixture: ComponentFixture<CaseforblacklistedvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseforblacklistedvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseforblacklistedvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
