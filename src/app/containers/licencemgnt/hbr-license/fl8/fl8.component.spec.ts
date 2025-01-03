import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl8Component } from './fl8.component';

describe('Fl8Component', () => {
  let component: Fl8Component;
  let fixture: ComponentFixture<Fl8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
