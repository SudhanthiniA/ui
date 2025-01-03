import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbwfl10Component } from './viewbwfl10.component';

describe('Viewbwfl10Component', () => {
  let component: Viewbwfl10Component;
  let fixture: ComponentFixture<Viewbwfl10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbwfl10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbwfl10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
