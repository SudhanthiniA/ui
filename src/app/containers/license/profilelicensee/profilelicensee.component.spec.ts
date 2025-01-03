import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilelicenseeComponent } from './profilelicensee.component';

describe('ProfilelicenseeComponent', () => {
  let component: ProfilelicenseeComponent;
  let fixture: ComponentFixture<ProfilelicenseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilelicenseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilelicenseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
