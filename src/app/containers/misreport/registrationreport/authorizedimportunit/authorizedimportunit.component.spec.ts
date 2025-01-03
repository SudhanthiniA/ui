import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedimportunitComponent } from './authorizedimportunit.component';

describe('AuthorizedimportunitComponent', () => {
  let component: AuthorizedimportunitComponent;
  let fixture: ComponentFixture<AuthorizedimportunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedimportunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedimportunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
