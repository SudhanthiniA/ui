import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb9Component } from './clb9.component';

describe('Clb9Component', () => {
  let component: Clb9Component;
  let fixture: ComponentFixture<Clb9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
