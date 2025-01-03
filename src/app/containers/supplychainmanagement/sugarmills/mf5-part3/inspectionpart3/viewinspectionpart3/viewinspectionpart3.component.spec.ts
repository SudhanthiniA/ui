import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewinspectionpart3Component } from './viewinspectionpart3.component';

describe('Viewinspectionpart3Component', () => {
  let component: Viewinspectionpart3Component;
  let fixture: ComponentFixture<Viewinspectionpart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewinspectionpart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewinspectionpart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
