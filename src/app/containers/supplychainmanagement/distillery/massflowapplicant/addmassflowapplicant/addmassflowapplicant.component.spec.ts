import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmassflowapplicantComponent } from './addmassflowapplicant.component';

describe('AddmassflowapplicantComponent', () => {
  let component: AddmassflowapplicantComponent;
  let fixture: ComponentFixture<AddmassflowapplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmassflowapplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmassflowapplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
