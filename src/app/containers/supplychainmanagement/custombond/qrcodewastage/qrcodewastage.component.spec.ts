import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodewastageComponent } from './qrcodewastage.component';

describe('QrcodewastageComponent', () => {
  let component: QrcodewastageComponent;
  let fixture: ComponentFixture<QrcodewastageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodewastageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodewastageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
