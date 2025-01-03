import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewplanestimationapplicationComponent } from './viewplanestimationapplication.component';

describe('ViewplanestimationapplicationComponent', () => {
  let component: ViewplanestimationapplicationComponent;
  let fixture: ComponentFixture<ViewplanestimationapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewplanestimationapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewplanestimationapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
