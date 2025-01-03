import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl8Component } from './viewfl8.component';

describe('Viewfl8Component', () => {
  let component: Viewfl8Component;
  let fixture: ComponentFixture<Viewfl8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
