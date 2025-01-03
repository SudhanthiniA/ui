import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtypeofuserComponent } from './addtypeofuser.component';

describe('AddtypeofuserComponent', () => {
  let component: AddtypeofuserComponent;
  let fixture: ComponentFixture<AddtypeofuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtypeofuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtypeofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
