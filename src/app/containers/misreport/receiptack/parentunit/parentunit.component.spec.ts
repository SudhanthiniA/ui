import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  ParentunitComponent } from './parentunit.component';

describe('ParentunitComponent', () => {
  let component: ParentunitComponent;
  let fixture: ComponentFixture<ParentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
