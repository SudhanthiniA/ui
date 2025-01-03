import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clb6Component } from './clb6.component';

describe('Clb6Component', () => {
  let component: Clb6Component;
  let fixture: ComponentFixture<Clb6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clb6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clb6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
