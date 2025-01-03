import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl36Component } from './fl36.component';

describe('Fl36Component', () => {
  let component: Fl36Component;
  let fixture: ComponentFixture<Fl36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
