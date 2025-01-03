import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransportpassgenerationComponent } from './viewtransportpassgeneration.component';

describe('ViewtransportpassgenerationComponent', () => {
  let component: ViewtransportpassgenerationComponent;
  let fixture: ComponentFixture<ViewtransportpassgenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransportpassgenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransportpassgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
