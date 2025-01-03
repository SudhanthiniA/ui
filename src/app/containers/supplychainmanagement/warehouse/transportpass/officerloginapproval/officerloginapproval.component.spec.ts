import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerloginapprovalComponent } from './officerloginapproval.component';

describe('OfficerloginapprovalComponent', () => {
  let component: OfficerloginapprovalComponent;
  let fixture: ComponentFixture<OfficerloginapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerloginapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerloginapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
