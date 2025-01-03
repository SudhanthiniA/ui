import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditsampledetailsentryComponent } from './addeditsampledetailsentry.component';

describe('AddeditsampledetailsentryComponent', () => {
  let component: AddeditsampledetailsentryComponent;
  let fixture: ComponentFixture<AddeditsampledetailsentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditsampledetailsentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditsampledetailsentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
