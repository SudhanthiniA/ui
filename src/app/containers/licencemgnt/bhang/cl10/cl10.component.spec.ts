import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl10Component } from './cl10.component';

describe('Cl10Component', () => {
  let component: Cl10Component;
  let fixture: ComponentFixture<Cl10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
