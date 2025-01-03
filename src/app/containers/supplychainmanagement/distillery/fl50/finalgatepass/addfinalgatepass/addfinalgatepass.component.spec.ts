import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfinalgatepassComponent } from './addfinalgatepass.component';

describe('AddfinalgatepassComponent', () => {
  let component: AddfinalgatepassComponent;
  let fixture: ComponentFixture<AddfinalgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfinalgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfinalgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
