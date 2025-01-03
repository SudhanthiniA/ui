import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlicensedomainComponent } from './viewlicensedomain.component';

describe('ViewlicensedomainComponent', () => {
  let component: ViewlicensedomainComponent;
  let fixture: ComponentFixture<ViewlicensedomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlicensedomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlicensedomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
