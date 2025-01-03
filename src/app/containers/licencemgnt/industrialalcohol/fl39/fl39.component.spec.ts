import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl39Component } from './fl39.component';

describe('Fl39Component', () => {
  let component: Fl39Component;
  let fixture: ComponentFixture<Fl39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl39Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
