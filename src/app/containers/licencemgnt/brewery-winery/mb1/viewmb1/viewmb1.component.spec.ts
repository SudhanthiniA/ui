import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmb1Component } from './viewmb1.component';

describe('Viewmb1Component', () => {
  let component: Viewmb1Component;
  let fixture: ComponentFixture<Viewmb1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmb1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
