import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPd17Component } from './view-pd17.component';

describe('ViewPd17Component', () => {
  let component: ViewPd17Component;
  let fixture: ComponentFixture<ViewPd17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPd17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPd17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
