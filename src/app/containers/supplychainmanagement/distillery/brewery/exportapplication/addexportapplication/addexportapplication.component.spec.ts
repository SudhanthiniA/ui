import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexportapplicationComponent } from './addexportapplication.component';

describe('AddexportapplicationComponent', () => {
  let component: AddexportapplicationComponent;
  let fixture: ComponentFixture<AddexportapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexportapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexportapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
