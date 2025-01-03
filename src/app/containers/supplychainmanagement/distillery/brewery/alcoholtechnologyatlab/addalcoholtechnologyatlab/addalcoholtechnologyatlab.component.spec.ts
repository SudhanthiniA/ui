import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddalcoholtechnologyatlabComponent } from './addalcoholtechnologyatlab.component';

describe('AddalcoholtechnologyatlabComponent', () => {
  let component: AddalcoholtechnologyatlabComponent;
  let fixture: ComponentFixture<AddalcoholtechnologyatlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddalcoholtechnologyatlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddalcoholtechnologyatlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
