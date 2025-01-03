import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Breweryform2Component } from './breweryform2.component';

describe('Breweryform2Component', () => {
  let component: Breweryform2Component;
  let fixture: ComponentFixture<Breweryform2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Breweryform2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Breweryform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
