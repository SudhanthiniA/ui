import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addfl35Component } from './addfl35.component';

describe('Addfl35Component', () => {
  let component: Addfl35Component;
  let fixture: ComponentFixture<Addfl35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addfl35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addfl35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
