import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtariandsendhicl7Component } from './viewtariandsendhicl7.component';

describe('Viewtariandsendhicl7Component', () => {
  let component: Viewtariandsendhicl7Component;
  let fixture: ComponentFixture<Viewtariandsendhicl7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtariandsendhicl7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtariandsendhicl7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
