import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPd26Component } from './view-pd26.component';

describe('ViewPd26Component', () => {
  let component: ViewPd26Component;
  let fixture: ComponentFixture<ViewPd26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPd26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPd26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
