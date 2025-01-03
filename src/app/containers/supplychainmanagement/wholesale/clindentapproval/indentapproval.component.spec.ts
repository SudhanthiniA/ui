import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  IndentapprovalComponent } from './indentapproval.component';

describe('IndentapprovalComponent', () => {
  let component: IndentapprovalComponent;
  let fixture: ComponentFixture<IndentapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
