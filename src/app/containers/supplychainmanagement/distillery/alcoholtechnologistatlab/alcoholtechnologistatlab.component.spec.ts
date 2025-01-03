import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholtechnologistatlabComponent } from './alcoholtechnologistatlab.component';

describe('AlcoholtechnologistatlabComponent', () => {
  let component: AlcoholtechnologistatlabComponent;
  let fixture: ComponentFixture<AlcoholtechnologistatlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoholtechnologistatlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholtechnologistatlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
