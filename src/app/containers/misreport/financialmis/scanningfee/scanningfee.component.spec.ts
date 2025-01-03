import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanningfeeComponent } from './scanningfee.component';

describe('ScanningfeeComponent', () => {
  let component: ScanningfeeComponent;
  let fixture: ComponentFixture<ScanningfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanningfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanningfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
