import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmstistinspectionComponent } from './viewmstistinspection.component';

describe('ViewmstistinspectionComponent', () => {
  let component: ViewmstistinspectionComponent;
  let fixture: ComponentFixture<ViewmstistinspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmstistinspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmstistinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
