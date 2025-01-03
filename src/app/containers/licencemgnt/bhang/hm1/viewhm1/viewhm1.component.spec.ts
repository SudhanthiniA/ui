import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewhm1Component } from './viewhm1.component';

describe('Viewhm1Component', () => {
  let component: Viewhm1Component;
  let fixture: ComponentFixture<Viewhm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewhm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewhm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
