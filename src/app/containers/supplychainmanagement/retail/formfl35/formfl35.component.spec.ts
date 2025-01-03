import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formfl35Component } from './formfl35.component';

describe('Formfl35Component', () => {
  let component: Formfl35Component;
  let fixture: ComponentFixture<Formfl35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formfl35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formfl35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
