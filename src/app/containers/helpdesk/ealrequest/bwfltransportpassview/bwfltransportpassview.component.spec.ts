import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwfltransportpassviewComponent } from './bwfltransportpassview.component';

describe('BwfltransportpassviewComponent', () => {
  let component: BwfltransportpassviewComponent;
  let fixture: ComponentFixture<BwfltransportpassviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwfltransportpassviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwfltransportpassviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
