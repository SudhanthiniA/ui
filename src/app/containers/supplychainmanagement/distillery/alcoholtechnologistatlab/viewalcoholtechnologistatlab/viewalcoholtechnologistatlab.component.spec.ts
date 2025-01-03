import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalcoholtechnologistatlabComponent } from './viewalcoholtechnologistatlab.component';

describe('ViewalcoholtechnologistatlabComponent', () => {
  let component: ViewalcoholtechnologistatlabComponent;
  let fixture: ComponentFixture<ViewalcoholtechnologistatlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewalcoholtechnologistatlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalcoholtechnologistatlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
