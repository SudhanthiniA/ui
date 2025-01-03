import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnamolassesadjustmentComponent } from './enamolassesadjustment.component';

describe('EnamolassesadjustmentComponent', () => {
  let component: EnamolassesadjustmentComponent;
  let fixture: ComponentFixture<EnamolassesadjustmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnamolassesadjustmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnamolassesadjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
