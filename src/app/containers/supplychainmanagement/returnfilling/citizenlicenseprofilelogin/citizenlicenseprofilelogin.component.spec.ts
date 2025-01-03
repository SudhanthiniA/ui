import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenlicenseprofileloginComponent } from './citizenlicenseprofilelogin.component';

describe('CitizenlicenseprofileloginComponent', () => {
  let component: CitizenlicenseprofileloginComponent;
  let fixture: ComponentFixture<CitizenlicenseprofileloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenlicenseprofileloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenlicenseprofileloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
