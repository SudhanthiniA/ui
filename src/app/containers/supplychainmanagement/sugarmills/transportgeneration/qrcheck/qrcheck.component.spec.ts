import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcheckComponent } from './qrcheck.component';

describe('QrcheckComponent', () => {
  let component: QrcheckComponent;
  let fixture: ComponentFixture<QrcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
