import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministartivechargelogComponent } from './administartivechargelog.component';

describe('AdministartivechargelogComponent', () => {
  let component: AdministartivechargelogComponent;
  let fixture: ComponentFixture<AdministartivechargelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministartivechargelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministartivechargelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
