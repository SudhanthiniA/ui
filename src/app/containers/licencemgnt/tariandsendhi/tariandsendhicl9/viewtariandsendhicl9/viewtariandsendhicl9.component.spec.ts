import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtariandsendhicl9Component } from './viewtariandsendhicl9.component';

describe('Viewtariandsendhicl9Component', () => {
  let component: Viewtariandsendhicl9Component;
  let fixture: ComponentFixture<Viewtariandsendhicl9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtariandsendhicl9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtariandsendhicl9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
