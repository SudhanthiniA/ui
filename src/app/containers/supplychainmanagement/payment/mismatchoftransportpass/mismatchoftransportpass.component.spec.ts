import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MismatchoftransportpassComponent } from './mismatchoftransportpass.component';

describe('MismatchoftransportpassComponent', () => {
  let component: MismatchoftransportpassComponent;
  let fixture: ComponentFixture<MismatchoftransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MismatchoftransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MismatchoftransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
