import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Breweryform1Component } from './breweryform1.component';

describe('Breweryform1Component', () => {
  let component: Breweryform1Component;
  let fixture: ComponentFixture<Breweryform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Breweryform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Breweryform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
