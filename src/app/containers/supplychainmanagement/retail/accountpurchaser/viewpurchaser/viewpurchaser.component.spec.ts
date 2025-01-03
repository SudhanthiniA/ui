import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpurchaserComponent } from './viewpurchaser.component';

describe('ViewpurchaserComponent', () => {
  let component: ViewpurchaserComponent;
  let fixture: ComponentFixture<ViewpurchaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpurchaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpurchaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
