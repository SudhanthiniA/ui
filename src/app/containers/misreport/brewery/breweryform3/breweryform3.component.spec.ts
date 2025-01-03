import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Breweryform3Component } from './breweryform3.component';

describe('Breweryform3Component', () => {
  let component: Breweryform3Component;
  let fixture: ComponentFixture<Breweryform3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Breweryform3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Breweryform3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
