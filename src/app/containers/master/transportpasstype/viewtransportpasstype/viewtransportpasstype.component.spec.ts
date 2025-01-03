import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransportpasstypeComponent } from './viewtransportpasstype.component';

describe('ViewtransportpasstypeComponent', () => {
  let component: ViewtransportpasstypeComponent;
  let fixture: ComponentFixture<ViewtransportpasstypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransportpasstypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransportpasstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
