import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSiteDetailsComponent } from './application-site-details.component';

describe('ApplicationSiteDetailsComponent', () => {
  let component: ApplicationSiteDetailsComponent;
  let fixture: ComponentFixture<ApplicationSiteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationSiteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationSiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
