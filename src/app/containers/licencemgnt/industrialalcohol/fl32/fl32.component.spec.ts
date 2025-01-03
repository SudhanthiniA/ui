import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl32Component } from './fl32.component';

describe('Fl32Component', () => {
  let component: Fl32Component;
  let fixture: ComponentFixture<Fl32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
