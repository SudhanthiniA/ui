import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtariandsendhicl11Component } from './viewtariandsendhicl11.component';

describe('Viewtariandsendhicl11Component', () => {
  let component: Viewtariandsendhicl11Component;
  let fixture: ComponentFixture<Viewtariandsendhicl11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtariandsendhicl11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtariandsendhicl11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
