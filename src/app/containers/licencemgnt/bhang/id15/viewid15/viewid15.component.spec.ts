import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewid15Component } from './viewid15.component';

describe('Viewid15Component', () => {
  let component: Viewid15Component;
  let fixture: ComponentFixture<Viewid15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewid15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewid15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
