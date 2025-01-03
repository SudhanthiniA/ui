import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewbwfl6Component } from './viewbwfl6.component';

describe('Viewbwfl6Component', () => {
  let component: Viewbwfl6Component;
  let fixture: ComponentFixture<Viewbwfl6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewbwfl6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewbwfl6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
