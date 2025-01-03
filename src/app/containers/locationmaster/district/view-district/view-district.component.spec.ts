import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDistrictComponent } from './view-district.component';

describe('ViewDistrictComponent', () => {
  let component: ViewDistrictComponent;
  let fixture: ComponentFixture<ViewDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
