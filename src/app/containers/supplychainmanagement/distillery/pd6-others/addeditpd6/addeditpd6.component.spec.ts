import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addeditpd6Component } from './addeditpd6.component';

describe('Addeditpd6Component', () => {
  let component: Addeditpd6Component;
  let fixture: ComponentFixture<Addeditpd6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addeditpd6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addeditpd6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
