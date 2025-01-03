import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenserenewalComponent } from './licenserenewal.component';

describe('LicenserenewalComponent', () => {
  let component: LicenserenewalComponent;
  let fixture: ComponentFixture<LicenserenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenserenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenserenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
