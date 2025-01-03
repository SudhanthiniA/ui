import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotmentofmolassesComponent } from './allotmentofmolasses.component';

describe('AllotmentofmolassesComponent', () => {
  let component: AllotmentofmolassesComponent;
  let fixture: ComponentFixture<AllotmentofmolassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotmentofmolassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotmentofmolassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
