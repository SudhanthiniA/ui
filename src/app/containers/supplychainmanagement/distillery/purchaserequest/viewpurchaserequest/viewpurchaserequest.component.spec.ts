import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpurchaserequestComponent } from './viewpurchaserequest.component';

describe('ViewpurchaserequestComponent', () => {
  let component: ViewpurchaserequestComponent;
  let fixture: ComponentFixture<ViewpurchaserequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpurchaserequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpurchaserequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
