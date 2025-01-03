import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedittanktypeComponent } from './addedittanktype.component';

describe('AddedittanktypeComponent', () => {
  let component: AddedittanktypeComponent;
  let fixture: ComponentFixture<AddedittanktypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedittanktypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedittanktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
