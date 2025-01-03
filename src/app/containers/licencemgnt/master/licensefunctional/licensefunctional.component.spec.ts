import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensefunctionalComponent } from './licensefunctional.component';

describe('LicensefunctionalComponent', () => {
  let component: LicensefunctionalComponent;
  let fixture: ComponentFixture<LicensefunctionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensefunctionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensefunctionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
