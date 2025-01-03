import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplanestimationapplicationComponent } from './addplanestimationapplication.component';

describe('AddplanestimationapplicationComponent', () => {
  let component: AddplanestimationapplicationComponent;
  let fixture: ComponentFixture<AddplanestimationapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplanestimationapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplanestimationapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
