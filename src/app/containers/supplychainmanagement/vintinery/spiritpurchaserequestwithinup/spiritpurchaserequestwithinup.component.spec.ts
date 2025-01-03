import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritpurchaserequestwithinupComponent } from './spiritpurchaserequestwithinup.component';

describe('SpiritpurchaserequestwithinupComponent', () => {
  let component: SpiritpurchaserequestwithinupComponent;
  let fixture: ComponentFixture<SpiritpurchaserequestwithinupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritpurchaserequestwithinupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritpurchaserequestwithinupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
