import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankconversionreportComponent } from './tankconversionreport.component';

describe('TankconversionreportComponent', () => {
  let component: TankconversionreportComponent;
  let fixture: ComponentFixture<TankconversionreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankconversionreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankconversionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
