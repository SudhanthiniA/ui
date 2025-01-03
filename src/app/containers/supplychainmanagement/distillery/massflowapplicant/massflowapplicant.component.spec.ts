import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassflowapplicantComponent } from './massflowapplicant.component';

describe('MassflowapplicantComponent', () => {
  let component: MassflowapplicantComponent;
  let fixture: ComponentFixture<MassflowapplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassflowapplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassflowapplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
