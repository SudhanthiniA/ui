import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictlevelcaseformComponent } from './districtlevelcaseform.component';

describe('DistrictlevelcaseformComponent', () => {
  let component: DistrictlevelcaseformComponent;
  let fixture: ComponentFixture<DistrictlevelcaseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictlevelcaseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictlevelcaseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
