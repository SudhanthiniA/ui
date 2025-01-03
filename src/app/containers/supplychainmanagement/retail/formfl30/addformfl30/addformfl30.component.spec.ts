import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addformfl30Component } from './addformfl30.component';

describe('Addformfl30Component', () => {
  let component: Addformfl30Component;
  let fixture: ComponentFixture<Addformfl30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addformfl30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addformfl30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
