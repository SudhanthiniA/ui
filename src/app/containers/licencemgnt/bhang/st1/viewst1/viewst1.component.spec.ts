import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewst1Component } from './viewst1.component';

describe('Viewst1Component', () => {
  let component: Viewst1Component;
  let fixture: ComponentFixture<Viewst1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewst1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewst1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
