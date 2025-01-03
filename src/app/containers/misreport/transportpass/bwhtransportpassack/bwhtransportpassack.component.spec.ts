import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwhtransportpassackComponent } from './bwhtransportpassack.component';

describe('BwhtransportpassackComponent', () => {
  let component: BwhtransportpassackComponent;
  let fixture: ComponentFixture<BwhtransportpassackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwhtransportpassackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwhtransportpassackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
