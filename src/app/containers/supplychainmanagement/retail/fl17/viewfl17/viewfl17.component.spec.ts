import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl17Component } from './viewfl17.component';

describe('Viewfl17Component', () => {
  let component: Viewfl17Component;
  let fixture: ComponentFixture<Viewfl17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
