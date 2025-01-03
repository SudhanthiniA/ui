import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransportpassparentunitComponent } from './viewtransportpassparentunit.component';

describe('ViewtransportpassparentunitComponent', () => {
  let component: ViewtransportpassparentunitComponent;
  let fixture: ComponentFixture<ViewtransportpassparentunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransportpassparentunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransportpassparentunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
