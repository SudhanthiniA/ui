import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmstistinspectionComponent } from './addmstistinspection.component';

describe('AddmstistinspectionComponent', () => {
  let component: AddmstistinspectionComponent;
  let fixture: ComponentFixture<AddmstistinspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmstistinspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmstistinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
