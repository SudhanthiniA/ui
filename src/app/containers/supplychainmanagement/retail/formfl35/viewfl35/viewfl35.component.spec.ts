import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl35Component } from './viewfl35.component';

describe('Viewfl35Component', () => {
  let component: Viewfl35Component;
  let fixture: ComponentFixture<Viewfl35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
