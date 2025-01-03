import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwflLicenseViewComponent } from './bwfl-license-view.component';

describe('BwflLicenseViewComponent', () => {
  let component: BwflLicenseViewComponent;
  let fixture: ComponentFixture<BwflLicenseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwflLicenseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwflLicenseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
