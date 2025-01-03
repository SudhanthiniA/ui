import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbwfl9Component } from './viewbwfl9.component';

describe('Viewbwfl9Component', () => {
  let component: Viewbwfl9Component;
  let fixture: ComponentFixture<Viewbwfl9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbwfl9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbwfl9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
