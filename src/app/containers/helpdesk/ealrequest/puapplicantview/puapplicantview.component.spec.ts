import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuapplicantviewComponent } from './puapplicantview.component';

describe('PuapplicantviewComponent', () => {
  let component: PuapplicantviewComponent;
  let fixture: ComponentFixture<PuapplicantviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuapplicantviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuapplicantviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
