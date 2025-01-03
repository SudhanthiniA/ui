import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addbwfl8Component } from './addbwfl8.component';

describe('Addbwfl8Component', () => {
  let component: Addbwfl8Component;
  let fixture: ComponentFixture<Addbwfl8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addbwfl8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addbwfl8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
