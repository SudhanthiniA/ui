import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictmapComponent } from './districtmap.component';

describe('DistrictmapComponent', () => {
  let component: DistrictmapComponent;
  let fixture: ComponentFixture<DistrictmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
