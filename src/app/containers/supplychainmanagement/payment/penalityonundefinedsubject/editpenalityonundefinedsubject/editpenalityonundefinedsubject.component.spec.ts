import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpenalityonundefinedsubjectComponent } from './editpenalityonundefinedsubject.component';

describe('EditpenalityonundefinedsubjectComponent', () => {
  let component: EditpenalityonundefinedsubjectComponent;
  let fixture: ComponentFixture<EditpenalityonundefinedsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpenalityonundefinedsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpenalityonundefinedsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
