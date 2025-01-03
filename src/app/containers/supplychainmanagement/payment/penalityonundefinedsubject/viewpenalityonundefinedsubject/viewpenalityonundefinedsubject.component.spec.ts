import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpenalityonundefinedsubjectComponent } from './viewpenalityonundefinedsubject.component';

describe('ViewpenalityonundefinedsubjectComponent', () => {
  let component: ViewpenalityonundefinedsubjectComponent;
  let fixture: ComponentFixture<ViewpenalityonundefinedsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpenalityonundefinedsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpenalityonundefinedsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
