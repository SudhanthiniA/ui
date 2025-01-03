import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addbwfl10Component } from './addbwfl10.component';

describe('Addbwfl10Component', () => {
  let component: Addbwfl10Component;
  let fixture: ComponentFixture<Addbwfl10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addbwfl10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addbwfl10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
