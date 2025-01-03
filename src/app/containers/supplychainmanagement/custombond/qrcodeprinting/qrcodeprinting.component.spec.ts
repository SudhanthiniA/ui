import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeprintingComponent } from './qrcodeprinting.component';

describe('QrcodeprintingComponent', () => {
  let component: QrcodeprintingComponent;
  let fixture: ComponentFixture<QrcodeprintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodeprintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeprintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
