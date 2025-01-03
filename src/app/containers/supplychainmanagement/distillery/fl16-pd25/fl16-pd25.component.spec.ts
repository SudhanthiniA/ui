import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl16Pd25Component } from './fl16-pd25.component';

describe('Fl16Pd25Component', () => {
  let component: Fl16Pd25Component;
  let fixture: ComponentFixture<Fl16Pd25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl16Pd25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl16Pd25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
