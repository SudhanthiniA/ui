import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inspectionpart3Component } from './inspectionpart3.component';

describe('Inspectionpart3Component', () => {
  let component: Inspectionpart3Component;
  let fixture: ComponentFixture<Inspectionpart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inspectionpart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inspectionpart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
