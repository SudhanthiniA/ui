import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl36Component } from './viewfl36.component';

describe('Viewfl36Component', () => {
  let component: Viewfl36Component;
  let fixture: ComponentFixture<Viewfl36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
