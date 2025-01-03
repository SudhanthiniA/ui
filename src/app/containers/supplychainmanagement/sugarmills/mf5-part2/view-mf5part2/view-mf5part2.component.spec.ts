import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMf5part2Component } from './view-mf5part2.component';

describe('ViewMf5part2Component', () => {
  let component: ViewMf5part2Component;
  let fixture: ComponentFixture<ViewMf5part2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMf5part2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMf5part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
