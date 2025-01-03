import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl2Component } from './fl2.component';

describe('Fl2Component', () => {
  let component: Fl2Component;
  let fixture: ComponentFixture<Fl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
