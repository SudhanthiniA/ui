import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationPremisesDetailsComponent } from './application-premises-details.component';

describe('ApplicationPremisesDetailsComponent', () => {
  let component: ApplicationPremisesDetailsComponent;
  let fixture: ComponentFixture<ApplicationPremisesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationPremisesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationPremisesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
