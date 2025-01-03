import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandwiseplanestimationComponent } from './brandwiseplanestimation.component'

describe('BrandwiseplanestimationComponent', () => {
  let component: BrandwiseplanestimationComponent;
  let fixture: ComponentFixture<BrandwiseplanestimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandwiseplanestimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandwiseplanestimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
