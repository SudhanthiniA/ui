import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddalcoholtechnologistatlabComponent } from './addalcoholtechnologistatlab.component';

describe('AddalcoholtechnologistatlabComponent', () => {
  let component: AddalcoholtechnologistatlabComponent;
  let fixture: ComponentFixture<AddalcoholtechnologistatlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddalcoholtechnologistatlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddalcoholtechnologistatlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
