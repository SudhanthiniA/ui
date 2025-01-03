import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtariandsendhicl8Component } from './viewtariandsendhicl8.component';

describe('Viewtariandsendhicl8Component', () => {
  let component: Viewtariandsendhicl8Component;
  let fixture: ComponentFixture<Viewtariandsendhicl8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtariandsendhicl8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtariandsendhicl8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
