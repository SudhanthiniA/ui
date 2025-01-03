import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiprofileComponent } from './uiprofile.component';

describe('UiprofileComponent', () => {
  let component: UiprofileComponent;
  let fixture: ComponentFixture<UiprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
