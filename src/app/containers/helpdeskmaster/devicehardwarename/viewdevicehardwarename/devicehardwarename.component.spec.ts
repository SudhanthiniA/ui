import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdevicehardwarenameComponent } from './devicehardwarename.component';

describe('ViewdevicehardwarenameComponent', () => {
  let component: ViewdevicehardwarenameComponent;
  let fixture: ComponentFixture<ViewdevicehardwarenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdevicehardwarenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdevicehardwarenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
