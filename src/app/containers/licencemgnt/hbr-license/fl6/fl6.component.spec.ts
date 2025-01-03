import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl6Component } from './fl6.component';

describe('Fl6Component', () => {
  let component: Fl6Component;
  let fixture: ComponentFixture<Fl6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
