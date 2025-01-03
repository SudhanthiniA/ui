import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassetdetailsComponent } from './viewassetdetails.component';

describe('ViewassetdetailsComponent', () => {
  let component: ViewassetdetailsComponent;
  let fixture: ComponentFixture<ViewassetdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewassetdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewassetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
