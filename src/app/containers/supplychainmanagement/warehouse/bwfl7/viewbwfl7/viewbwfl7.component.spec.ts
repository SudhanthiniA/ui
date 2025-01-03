import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbwfl7Component } from './viewbwfl7.component';

describe('Viewbwfl7Component', () => {
  let component: Viewbwfl7Component;
  let fixture: ComponentFixture<Viewbwfl7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbwfl7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbwfl7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
