import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritorderreportComponent } from './spiritorderreport.component';

describe('SpiritorderreportComponent', () => {
  let component: SpiritorderreportComponent;
  let fixture: ComponentFixture<SpiritorderreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritorderreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritorderreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
