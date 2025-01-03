import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsbondapplicationstatusdetailsComponent } from './wsbondapplicationstatusdetails.component';

describe('WsbondapplicationstatusdetailsComponent', () => {
  let component: WsbondapplicationstatusdetailsComponent;
  let fixture: ComponentFixture<WsbondapplicationstatusdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsbondapplicationstatusdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsbondapplicationstatusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
