import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl23Component } from './fl23.component';

describe('Fl23Component', () => {
  let component: Fl23Component;
  let fixture: ComponentFixture<Fl23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
