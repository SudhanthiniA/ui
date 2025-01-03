import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl17Component } from './fl17.component';

describe('Fl17Component', () => {
  let component: Fl17Component;
  let fixture: ComponentFixture<Fl17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
