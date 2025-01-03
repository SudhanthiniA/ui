import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictmasterComponent } from './districtmaster.component';

describe('DistrictmasterComponent', () => {
  let component: DistrictmasterComponent;
  let fixture: ComponentFixture<DistrictmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
