import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd9Component } from './pd9.component';

describe('Pd9Component', () => {
  let component: Pd9Component;
  let fixture: ComponentFixture<Pd9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
