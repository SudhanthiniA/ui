import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl32Pd25Component } from './fl32-pd25.component';

describe('Fl32Pd25Component', () => {
  let component: Fl32Pd25Component;
  let fixture: ComponentFixture<Fl32Pd25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl32Pd25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl32Pd25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
