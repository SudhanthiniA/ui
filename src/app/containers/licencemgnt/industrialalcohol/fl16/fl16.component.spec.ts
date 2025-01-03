import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl16Component } from './fl16.component';

describe('Fl16Component', () => {
  let component: Fl16Component;
  let fixture: ComponentFixture<Fl16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
