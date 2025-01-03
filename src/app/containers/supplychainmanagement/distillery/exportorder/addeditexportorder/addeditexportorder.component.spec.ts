import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditexportorderComponent } from './addeditexportorder.component';

describe('AddeditexportorderComponent', () => {
  let component: AddeditexportorderComponent;
  let fixture: ComponentFixture<AddeditexportorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditexportorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditexportorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
