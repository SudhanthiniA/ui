import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorderpickupparentComponent } from './addorderpickupparent.component';

describe('AddorderpickupparentComponent', () => {
  let component: AddorderpickupparentComponent;
  let fixture: ComponentFixture<AddorderpickupparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorderpickupparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorderpickupparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
