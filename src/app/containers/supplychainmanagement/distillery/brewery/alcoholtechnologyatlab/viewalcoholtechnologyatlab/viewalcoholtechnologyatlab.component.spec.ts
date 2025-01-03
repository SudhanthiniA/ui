import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalcoholtechnologyatlabComponent } from './viewalcoholtechnologyatlab.component';

describe('ViewalcoholtechnologyatlabComponent', () => {
  let component: ViewalcoholtechnologyatlabComponent;
  let fixture: ComponentFixture<ViewalcoholtechnologyatlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewalcoholtechnologyatlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalcoholtechnologyatlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
