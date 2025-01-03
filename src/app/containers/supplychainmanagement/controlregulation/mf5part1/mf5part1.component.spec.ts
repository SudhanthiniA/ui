import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf5part1Component } from './mf5part1.component';

describe('Mf5part1Component', () => {
  let component: Mf5part1Component;
  let fixture: ComponentFixture<Mf5part1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf5part1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf5part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
