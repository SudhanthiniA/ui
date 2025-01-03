import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedittankregistrationComponent } from './addedittankregistration.component';

describe('AddedittankregistrationComponent', () => {
  let component: AddedittankregistrationComponent;
  let fixture: ComponentFixture<AddedittankregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedittankregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedittankregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
