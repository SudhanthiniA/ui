import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewinspectionpart2Component } from './viewinspectionpart2.component';

describe('Viewinspectionpart2Component', () => {
  let component: Viewinspectionpart2Component;
  let fixture: ComponentFixture<Viewinspectionpart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewinspectionpart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewinspectionpart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
