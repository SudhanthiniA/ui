import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { St4Component } from './st4.component';

describe('St4Component', () => {
  let component: St4Component;
  let fixture: ComponentFixture<St4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ St4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(St4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
