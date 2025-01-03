import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FermentationOtContinuousprocessComponent } from './fermentation-ot-continuousprocess.component';

describe('FermentationOtContinuousprocessComponent', () => {
  let component: FermentationOtContinuousprocessComponent;
  let fixture: ComponentFixture<FermentationOtContinuousprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FermentationOtContinuousprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FermentationOtContinuousprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
