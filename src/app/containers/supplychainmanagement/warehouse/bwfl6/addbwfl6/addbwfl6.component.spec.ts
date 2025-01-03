import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addbwfl6Component } from './addbwfl6.component';

describe('Addbwfl6Component', () => {
  let component: Addbwfl6Component;
  let fixture: ComponentFixture<Addbwfl6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addbwfl6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addbwfl6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
