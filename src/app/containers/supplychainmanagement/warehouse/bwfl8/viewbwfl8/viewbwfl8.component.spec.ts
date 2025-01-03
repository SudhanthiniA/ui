import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbwfl8Component } from './viewbwfl8.component';

describe('Viewbwfl8Component', () => {
  let component: Viewbwfl8Component;
  let fixture: ComponentFixture<Viewbwfl8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbwfl8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbwfl8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
