import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb17Component } from './clb17.component';

describe('Clb17Component', () => {
  let component: Clb17Component;
  let fixture: ComponentFixture<Clb17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
