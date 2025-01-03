import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceaccessoriesstatusComponent } from './deviceaccessoriesstatus.component';

describe('DeviceaccessoriesstatusComponent', () => {
  let component: DeviceaccessoriesstatusComponent;
  let fixture: ComponentFixture<DeviceaccessoriesstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceaccessoriesstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceaccessoriesstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
