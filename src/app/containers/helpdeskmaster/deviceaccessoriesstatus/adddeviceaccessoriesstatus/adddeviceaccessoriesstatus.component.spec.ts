import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeviceaccessoriesstatusComponent } from './adddeviceaccessoriesstatus.component';

describe('AdddeviceaccessoriesstatusComponent', () => {
  let component: AdddeviceaccessoriesstatusComponent;
  let fixture: ComponentFixture<AdddeviceaccessoriesstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddeviceaccessoriesstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeviceaccessoriesstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
