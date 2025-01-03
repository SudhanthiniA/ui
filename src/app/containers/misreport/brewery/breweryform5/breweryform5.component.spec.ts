import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Breweryform5Component } from './breweryform5.component';

describe('Breweryform5Component', () => {
  let component: Breweryform5Component;
  let fixture: ComponentFixture<Breweryform5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Breweryform5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Breweryform5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
