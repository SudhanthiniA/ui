import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test10Component } from './test10.component';

describe('Test10Component', () => {
  let component: Test10Component;
  let fixture: ComponentFixture<Test10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
