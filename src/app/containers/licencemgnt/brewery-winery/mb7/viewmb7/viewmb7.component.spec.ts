import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmb7Component } from './viewmb7.component';

describe('Viewmb7Component', () => {
  let component: Viewmb7Component;
  let fixture: ComponentFixture<Viewmb7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmb7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmb7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
