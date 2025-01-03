import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingofcamerasandlogdetailsComponent } from './settingofcamerasandlogdetails.component';

describe('SettingofcamerasandlogdetailsComponent', () => {
  let component: SettingofcamerasandlogdetailsComponent;
  let fixture: ComponentFixture<SettingofcamerasandlogdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingofcamerasandlogdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingofcamerasandlogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
