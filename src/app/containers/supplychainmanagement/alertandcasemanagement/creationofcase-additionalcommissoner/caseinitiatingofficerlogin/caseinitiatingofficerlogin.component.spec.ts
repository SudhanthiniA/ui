import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseinitiatingofficerloginComponent } from './caseinitiatingofficerlogin.component';

describe('CaseinitiatingofficerloginComponent', () => {
  let component: CaseinitiatingofficerloginComponent;
  let fixture: ComponentFixture<CaseinitiatingofficerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseinitiatingofficerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseinitiatingofficerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
