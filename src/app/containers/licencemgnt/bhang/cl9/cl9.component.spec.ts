import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl9Component } from './cl9.component';

describe('Cl9Component', () => {
  let component: Cl9Component;
  let fixture: ComponentFixture<Cl9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
