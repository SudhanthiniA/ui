import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeBwflPersonComponent } from './authorize-bwfl-person.component';

describe('AuthorizeBwflPersonComponent', () => {
  let component: AuthorizeBwflPersonComponent;
  let fixture: ComponentFixture<AuthorizeBwflPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizeBwflPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeBwflPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
