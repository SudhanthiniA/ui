import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl12Component } from './cl12.component';

describe('Cl12Component', () => {
  let component: Cl12Component;
  let fixture: ComponentFixture<Cl12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
