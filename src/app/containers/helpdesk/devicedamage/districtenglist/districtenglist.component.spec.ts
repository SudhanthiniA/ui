import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictenglistComponent } from './districtenglist.component';

describe('DistrictenglistComponent', () => {
  let component: DistrictenglistComponent;
  let fixture: ComponentFixture<DistrictenglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictenglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictenglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
