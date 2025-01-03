import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeviceaccessoriesstatusComponent } from './viewdeviceaccessoriesstatus.component';

describe('ViewdeviceaccessoriesstatusComponent', () => {
  let component: ViewdeviceaccessoriesstatusComponent;
  let fixture: ComponentFixture<ViewdeviceaccessoriesstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdeviceaccessoriesstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdeviceaccessoriesstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
