import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf6part1Component } from './mf6part1.component';

describe('Mf6part1Component', () => {
  let component: Mf6part1Component;
  let fixture: ComponentFixture<Mf6part1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf6part1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf6part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
