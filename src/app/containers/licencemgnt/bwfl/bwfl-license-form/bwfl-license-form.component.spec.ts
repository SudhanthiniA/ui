import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwflLicenseFormComponent } from './bwfl-license-form.component';

describe('BwflLicenseFormComponent', () => {
  let component: BwflLicenseFormComponent;
  let fixture: ComponentFixture<BwflLicenseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwflLicenseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwflLicenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
