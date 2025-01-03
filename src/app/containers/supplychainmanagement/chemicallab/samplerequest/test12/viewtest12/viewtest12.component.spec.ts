import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewtest12Component } from './viewtest12.component';

describe('Viewtest12Component', () => {
  let component: Viewtest12Component;
  let fixture: ComponentFixture<Viewtest12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewtest12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewtest12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
