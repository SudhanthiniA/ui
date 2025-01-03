import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtariandsendhicl10Component } from './viewtariandsendhicl10.component';

describe('Viewtariandsendhicl10Component', () => {
  let component: Viewtariandsendhicl10Component;
  let fixture: ComponentFixture<Viewtariandsendhicl10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtariandsendhicl10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtariandsendhicl10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
