import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbio1Component } from './viewbio1.component';

describe('Viewbio1Component', () => {
  let component: Viewbio1Component;
  let fixture: ComponentFixture<Viewbio1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbio1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
