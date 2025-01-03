import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flb11Component } from './flb11.component';

describe('Flb11Component', () => {
  let component: Flb11Component;
  let fixture: ComponentFixture<Flb11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flb11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flb11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
