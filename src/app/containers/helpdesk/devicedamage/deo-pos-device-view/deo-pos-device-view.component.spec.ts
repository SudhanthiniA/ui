import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoPosDeviceViewComponent } from './deo-pos-device-view.component';

describe('DeoPosDeviceViewComponent', () => {
  let component: DeoPosDeviceViewComponent;
  let fixture: ComponentFixture<DeoPosDeviceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoPosDeviceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoPosDeviceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
