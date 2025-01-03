import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandlabelregbrewComponent } from './brandlabelregbrew.component';

describe('BrandlabelregbrewComponent', () => {
  let component: BrandlabelregbrewComponent;
  let fixture: ComponentFixture<BrandlabelregbrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandlabelregbrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandlabelregbrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
