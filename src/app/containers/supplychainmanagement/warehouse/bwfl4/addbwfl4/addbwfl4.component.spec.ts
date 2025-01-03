import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addbwfl4Component } from './addbwfl4.component';

describe('Addbwfl4Component', () => {
  let component: Addbwfl4Component;
  let fixture: ComponentFixture<Addbwfl4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addbwfl4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addbwfl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
