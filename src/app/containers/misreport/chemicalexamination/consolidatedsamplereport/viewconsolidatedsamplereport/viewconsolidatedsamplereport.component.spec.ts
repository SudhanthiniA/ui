import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconsolidatedsamplereportComponent } from './viewconsolidatedsamplereport.component';

describe('ViewconsolidatedsamplereportComponent', () => {
  let component: ViewconsolidatedsamplereportComponent;
  let fixture: ComponentFixture<ViewconsolidatedsamplereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewconsolidatedsamplereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewconsolidatedsamplereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
