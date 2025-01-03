import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPd11Component } from './view-pd11.component';

describe('ViewPd11Component', () => {
  let component: ViewPd11Component;
  let fixture: ComponentFixture<ViewPd11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPd11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPd11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
