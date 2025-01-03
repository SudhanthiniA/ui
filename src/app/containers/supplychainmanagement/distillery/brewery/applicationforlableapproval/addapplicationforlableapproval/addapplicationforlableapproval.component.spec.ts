import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddapplicationforlableapprovalComponent } from './addapplicationforlableapproval.component';

describe('AddapplicationforlableapprovalComponent', () => {
  let component: AddapplicationforlableapprovalComponent;
  let fixture: ComponentFixture<AddapplicationforlableapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddapplicationforlableapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddapplicationforlableapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
