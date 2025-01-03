import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorderpickupComponent } from './addorderpickup.component';

describe('AddorderpickupComponent', () => {
  let component: AddorderpickupComponent;
  let fixture: ComponentFixture<AddorderpickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorderpickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorderpickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
