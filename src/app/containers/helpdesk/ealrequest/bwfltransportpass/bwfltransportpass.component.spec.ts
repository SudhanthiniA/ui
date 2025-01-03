import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwfltransportpassComponent } from './bwfltransportpass.component';

describe('BwfltransportpassComponent', () => {
  let component: BwfltransportpassComponent;
  let fixture: ComponentFixture<BwfltransportpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwfltransportpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwfltransportpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
