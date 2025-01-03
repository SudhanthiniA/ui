import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleLicenseFormComponent } from './wholesale-license-form.component';

describe('WholesaleLicenseFormComponent', () => {
  let component: WholesaleLicenseFormComponent;
  let fixture: ComponentFixture<WholesaleLicenseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesaleLicenseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesaleLicenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
