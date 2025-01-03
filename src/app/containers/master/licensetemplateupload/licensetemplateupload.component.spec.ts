import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensetemplateuploadComponent } from './licensetemplateupload.component';

describe('LicensetemplateuploadComponent', () => {
  let component: LicensetemplateuploadComponent;
  let fixture: ComponentFixture<LicensetemplateuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensetemplateuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensetemplateuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
