import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtariandsendhicl12Component } from './viewtariandsendhicl12.component';

describe('Viewtariandsendhicl12Component', () => {
  let component: Viewtariandsendhicl12Component;
  let fixture: ComponentFixture<Viewtariandsendhicl12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtariandsendhicl12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtariandsendhicl12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
