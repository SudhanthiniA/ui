import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicencemasterComponent } from './licencemaster.component';

describe('LicencemasterComponent', () => {
  let component: LicencemasterComponent;
  let fixture: ComponentFixture<LicencemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicencemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicencemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
