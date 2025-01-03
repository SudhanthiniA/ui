import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl8Component } from './cl8.component';

describe('Cl8Component', () => {
  let component: Cl8Component;
  let fixture: ComponentFixture<Cl8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
