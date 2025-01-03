import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesaleLicenseViewComponent } from './wholesale-license-view.component';

describe('WholesaleLicenseViewComponent', () => {
  let component: WholesaleLicenseViewComponent;
  let fixture: ComponentFixture<WholesaleLicenseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesaleLicenseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesaleLicenseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
