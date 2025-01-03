import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmf6part1Component } from './viewmf6part1.component';

describe('Viewmf6part1Component', () => {
  let component: Viewmf6part1Component;
  let fixture: ComponentFixture<Viewmf6part1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmf6part1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmf6part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
