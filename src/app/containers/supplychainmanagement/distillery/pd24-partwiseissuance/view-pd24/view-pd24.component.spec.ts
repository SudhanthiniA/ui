import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPd24Component } from './view-pd24.component';

describe('ViewPd24Component', () => {
  let component: ViewPd24Component;
  let fixture: ComponentFixture<ViewPd24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPd24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPd24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
