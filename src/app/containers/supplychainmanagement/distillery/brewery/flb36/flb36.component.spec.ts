import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flb36Component } from './flb36.component';

describe('Flb36Component', () => {
  let component: Flb36Component;
  let fixture: ComponentFixture<Flb36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flb36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flb36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
