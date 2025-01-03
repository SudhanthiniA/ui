import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbwfl4Component } from './viewbwfl4.component';

describe('Viewbwfl4Component', () => {
  let component: Viewbwfl4Component;
  let fixture: ComponentFixture<Viewbwfl4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbwfl4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbwfl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
