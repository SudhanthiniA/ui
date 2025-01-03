import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransportationpassComponent } from './viewtransportationpass.component';

describe('ViewtransportationpassComponent', () => {
  let component: ViewtransportationpassComponent;
  let fixture: ComponentFixture<ViewtransportationpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransportationpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransportationpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
