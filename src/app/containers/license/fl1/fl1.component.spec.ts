import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl1Component } from './fl1.component';

describe('Fl1Component', () => {
  let component: Fl1Component;
  let fixture: ComponentFixture<Fl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
