import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addbwfl9Component } from './addbwfl9.component';

describe('Addbwfl9Component', () => {
  let component: Addbwfl9Component;
  let fixture: ComponentFixture<Addbwfl9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addbwfl9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addbwfl9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
