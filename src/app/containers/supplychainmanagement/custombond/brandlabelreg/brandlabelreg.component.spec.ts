import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandlabelregComponent } from './brandlabelreg.component';

describe('BrandlabelregComponent', () => {
  let component: BrandlabelregComponent;
  let fixture: ComponentFixture<BrandlabelregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandlabelregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandlabelregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
