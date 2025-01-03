import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpenalityonundefinedsubjectComponent } from './addpenalityonundefinedsubject.component';

describe('AddpenalityonundefinedsubjectComponent', () => {
  let component: AddpenalityonundefinedsubjectComponent;
  let fixture: ComponentFixture<AddpenalityonundefinedsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpenalityonundefinedsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpenalityonundefinedsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
