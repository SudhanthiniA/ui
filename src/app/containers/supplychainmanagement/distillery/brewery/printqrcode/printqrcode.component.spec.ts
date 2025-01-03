import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintqrcodeComponent } from './printqrcode.component';

describe('PrintqrcodeComponent', () => {
  let component: PrintqrcodeComponent;
  let fixture: ComponentFixture<PrintqrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintqrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
