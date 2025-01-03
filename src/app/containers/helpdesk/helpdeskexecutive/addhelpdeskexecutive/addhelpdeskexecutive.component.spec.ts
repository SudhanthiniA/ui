import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhelpdeskexecutiveComponent } from './addhelpdeskexecutive.component';

describe('AddhelpdeskexecutiveComponent', () => {
  let component: AddhelpdeskexecutiveComponent;
  let fixture: ComponentFixture<AddhelpdeskexecutiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhelpdeskexecutiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhelpdeskexecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
