import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl33Component } from './fl33.component';

describe('Fl33Component', () => {
  let component: Fl33Component;
  let fixture: ComponentFixture<Fl33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
