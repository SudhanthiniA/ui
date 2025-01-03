import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinspectingofficerComponent } from './addinspectingofficer.component';

describe('AddinspectingofficerComponent', () => {
  let component: AddinspectingofficerComponent;
  let fixture: ComponentFixture<AddinspectingofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinspectingofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinspectingofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
