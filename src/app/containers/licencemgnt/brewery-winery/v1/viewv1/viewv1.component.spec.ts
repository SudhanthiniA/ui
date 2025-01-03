import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewv1Component } from './viewv1.component';

describe('Viewv1Component', () => {
  let component: Viewv1Component;
  let fixture: ComponentFixture<Viewv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
