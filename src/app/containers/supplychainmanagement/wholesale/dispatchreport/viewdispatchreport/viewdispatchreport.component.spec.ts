import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdispatchreportComponent } from './viewdispatchreport.component';

describe('ViewdispatchreportComponent', () => {
  let component: ViewdispatchreportComponent;
  let fixture: ComponentFixture<ViewdispatchreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdispatchreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdispatchreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
