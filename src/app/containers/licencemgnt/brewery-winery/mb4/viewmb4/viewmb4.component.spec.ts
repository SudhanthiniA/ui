import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmb4Component } from './viewmb4.component';

describe('Viewmb4Component', () => {
  let component: Viewmb4Component;
  let fixture: ComponentFixture<Viewmb4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmb4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmb4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
