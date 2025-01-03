import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedsamplereportComponent } from './consolidatedsamplereport.component';

describe('ConsolidatedsamplereportComponent', () => {
  let component: ConsolidatedsamplereportComponent;
  let fixture: ComponentFixture<ConsolidatedsamplereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidatedsamplereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidatedsamplereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
