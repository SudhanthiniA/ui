import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoPosDeviceListComponent } from './deo-pos-device-list.component';

describe('DeoPosDeviceListComponent', () => {
  let component: DeoPosDeviceListComponent;
  let fixture: ComponentFixture<DeoPosDeviceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoPosDeviceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoPosDeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
