import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl9Component } from './fl9.component';

describe('Fl9Component', () => {
  let component: Fl9Component;
  let fixture: ComponentFixture<Fl9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
