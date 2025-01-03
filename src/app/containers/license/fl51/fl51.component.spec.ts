import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl51Component } from './fl51.component';

describe('Fl51Component', () => {
  let component: Fl51Component;
  let fixture: ComponentFixture<Fl51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
