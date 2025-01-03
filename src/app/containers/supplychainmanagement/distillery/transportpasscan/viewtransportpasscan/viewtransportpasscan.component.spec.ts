import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransportpasscanComponent } from './viewtransportpasscan.component';

describe('ViewtransportpasscanComponent', () => {
  let component: ViewtransportpasscanComponent;
  let fixture: ComponentFixture<ViewtransportpasscanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransportpasscanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransportpasscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
