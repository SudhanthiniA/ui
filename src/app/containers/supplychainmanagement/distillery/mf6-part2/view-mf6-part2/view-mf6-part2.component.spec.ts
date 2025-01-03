import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMf6Part2Component } from './view-mf6-part2.component';

describe('ViewMf6Part2Component', () => {
  let component: ViewMf6Part2Component;
  let fixture: ComponentFixture<ViewMf6Part2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMf6Part2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMf6Part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
