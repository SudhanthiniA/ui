import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl49Component } from './fl49.component';

describe('Fl49Component', () => {
  let component: Fl49Component;
  let fixture: ComponentFixture<Fl49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl49Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
