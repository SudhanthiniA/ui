import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholtechnologyatlabComponent } from './alcoholtechnologyatlab.component';

describe('AlcoholtechnologyatlabComponent', () => {
  let component: AlcoholtechnologyatlabComponent;
  let fixture: ComponentFixture<AlcoholtechnologyatlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoholtechnologyatlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholtechnologyatlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
