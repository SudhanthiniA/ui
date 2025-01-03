import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedpregistrationComponent } from './addedpregistration.component';

describe('AddedpregistrationComponent', () => {
  let component: AddedpregistrationComponent;
  let fixture: ComponentFixture<AddedpregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedpregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedpregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
