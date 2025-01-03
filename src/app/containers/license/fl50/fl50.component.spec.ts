import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl50Component } from './fl50.component';

describe('Fl50Component', () => {
  let component: Fl50Component;
  let fixture: ComponentFixture<Fl50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
