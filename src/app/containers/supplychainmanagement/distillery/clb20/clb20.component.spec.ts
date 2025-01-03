import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb20Component } from './clb20.component';

describe('Clb20Component', () => {
  let component: Clb20Component;
  let fixture: ComponentFixture<Clb20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
