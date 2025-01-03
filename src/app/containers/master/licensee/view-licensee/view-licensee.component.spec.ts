import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLicenseeComponent } from './view-licensee.component';

describe('ViewLicenseeComponent', () => {
  let component: ViewLicenseeComponent;
  let fixture: ComponentFixture<ViewLicenseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLicenseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLicenseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
