import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl40Component } from './fl40.component';

describe('Fl40Component', () => {
  let component: Fl40Component;
  let fixture: ComponentFixture<Fl40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
