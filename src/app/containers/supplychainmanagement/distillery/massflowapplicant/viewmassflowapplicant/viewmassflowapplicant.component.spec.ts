import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmassflowapplicantComponent } from './viewmassflowapplicant.component';

describe('ViewmassflowapplicantComponent', () => {
  let component: ViewmassflowapplicantComponent;
  let fixture: ComponentFixture<ViewmassflowapplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmassflowapplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmassflowapplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
