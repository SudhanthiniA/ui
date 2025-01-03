import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisquotadetailsComponent } from './misquotadetails.component';

describe('MisquotadetailsComponent', () => {
  let component: MisquotadetailsComponent;
  let fixture: ComponentFixture<MisquotadetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisquotadetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisquotadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
