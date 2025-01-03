import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfinaltransportpassComponent } from './viewfinaltransportpass.component';

describe('ViewfinaltransportpassComponent', () => {
  let component: ViewfinaltransportpassComponent;
  let fixture: ComponentFixture<ViewfinaltransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfinaltransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfinaltransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
