import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandwisedetailsComponent } from './brandwisedetails.component';

describe('BrandwisedetailsComponent', () => {
  let component: BrandwisedetailsComponent;
  let fixture: ComponentFixture<BrandwisedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandwisedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandwisedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
