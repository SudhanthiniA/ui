import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileparentloginComponent } from './profileparentlogin.component';

describe('ProfileparentloginComponent', () => {
  let component: ProfileparentloginComponent;
  let fixture: ComponentFixture<ProfileparentloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileparentloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileparentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
