import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensefunctionalyearComponent } from './licensefunctionalyear.component';

describe('LicensefunctionalyearComponent', () => {
  let component: LicensefunctionalyearComponent;
  let fixture: ComponentFixture<LicensefunctionalyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensefunctionalyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensefunctionalyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
