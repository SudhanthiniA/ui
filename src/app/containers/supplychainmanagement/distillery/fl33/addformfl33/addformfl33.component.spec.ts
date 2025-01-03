import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addformfl33Component } from './addformfl33.component';

describe('Addformfl33Component', () => {
  let component: Addformfl33Component;
  let fixture: ComponentFixture<Addformfl33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addformfl33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addformfl33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
