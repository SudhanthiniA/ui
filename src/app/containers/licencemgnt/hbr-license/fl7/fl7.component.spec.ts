import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl7Component } from './fl7.component';

describe('Fl7Component', () => {
  let component: Fl7Component;
  let fixture: ComponentFixture<Fl7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
