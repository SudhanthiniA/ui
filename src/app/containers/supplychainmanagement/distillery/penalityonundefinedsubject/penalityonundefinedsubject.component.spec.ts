import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalityonundefinedsubjectComponent } from './penalityonundefinedsubject.component';

describe('PenalityonundefinedsubjectComponent', () => {
  let component: PenalityonundefinedsubjectComponent;
  let fixture: ComponentFixture<PenalityonundefinedsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenalityonundefinedsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenalityonundefinedsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
