import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondapplicationtrackingdetailsComponent } from './bondapplicationtrackingdetails.component';

describe('BondapplicationtrackingdetailsComponent', () => {
  let component: BondapplicationtrackingdetailsComponent;
  let fixture: ComponentFixture<BondapplicationtrackingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondapplicationtrackingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondapplicationtrackingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
