import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeBwflLandingComponent } from './authorize-bwfl-landing.component';

describe('AuthorizeBwflLandingComponent', () => {
  let component: AuthorizeBwflLandingComponent;
  let fixture: ComponentFixture<AuthorizeBwflLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizeBwflLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeBwflLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
