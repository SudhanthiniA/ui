import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdtpermitComponent } from './ndtpermit.component';

describe('NdtpermitComponent', () => {
  let component: NdtpermitComponent;
  let fixture: ComponentFixture<NdtpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdtpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdtpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
