import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmb6Component } from './viewmb6.component';

describe('Viewmb6Component', () => {
  let component: Viewmb6Component;
  let fixture: ComponentFixture<Viewmb6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmb6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmb6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
