import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl7Component } from './viewfl7.component';

describe('Viewfl7Component', () => {
  let component: Viewfl7Component;
  let fixture: ComponentFixture<Viewfl7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
