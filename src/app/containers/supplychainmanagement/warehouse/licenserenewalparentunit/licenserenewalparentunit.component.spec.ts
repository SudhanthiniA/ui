import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenserenewalparentunitComponent } from './licenserenewalparentunit.component';

describe('LicenserenewalparentunitComponent', () => {
  let component: LicenserenewalparentunitComponent;
  let fixture: ComponentFixture<LicenserenewalparentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenserenewalparentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenserenewalparentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
