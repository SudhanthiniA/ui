import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Flb3Component } from './flb3.component';

describe('Flb3Component', () => {
  let component: Flb3Component;
  let fixture: ComponentFixture<Flb3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flb3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
