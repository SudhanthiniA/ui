import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMf10Component } from './view-mf10.component';

describe('ViewMf10Component', () => {
  let component: ViewMf10Component;
  let fixture: ComponentFixture<ViewMf10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMf10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMf10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
