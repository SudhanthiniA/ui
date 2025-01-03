import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexportapplicationComponent } from './viewexportapplication.component';

describe('ViewexportapplicationComponent', () => {
  let component: ViewexportapplicationComponent;
  let fixture: ComponentFixture<ViewexportapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexportapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexportapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
