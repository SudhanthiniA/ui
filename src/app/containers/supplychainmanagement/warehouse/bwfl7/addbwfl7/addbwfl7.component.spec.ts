import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addbwfl7Component } from './addbwfl7.component';

describe('Addbwfl7Component', () => {
  let component: Addbwfl7Component;
  let fixture: ComponentFixture<Addbwfl7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addbwfl7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addbwfl7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
