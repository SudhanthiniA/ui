import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl7Component } from './cl7.component';

describe('Cl7Component', () => {
  let component: Cl7Component;
  let fixture: ComponentFixture<Cl7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
