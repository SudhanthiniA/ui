import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoaddressComponent } from './geoaddress.component';

describe('GeoaddressComponent', () => {
  let component: GeoaddressComponent;
  let fixture: ComponentFixture<GeoaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
