import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addeditmf6part1Component } from './addeditmf6part1.component';

describe('Addeditmf6part1Component', () => {
  let component: Addeditmf6part1Component;
  let fixture: ComponentFixture<Addeditmf6part1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addeditmf6part1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addeditmf6part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
