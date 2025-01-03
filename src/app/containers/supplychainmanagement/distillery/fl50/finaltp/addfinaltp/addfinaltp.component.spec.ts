import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfinaltpComponent } from './addfinaltp.component';

describe('AddfinaltpComponent', () => {
  let component: AddfinaltpComponent;
  let fixture: ComponentFixture<AddfinaltpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfinaltpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfinaltpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
