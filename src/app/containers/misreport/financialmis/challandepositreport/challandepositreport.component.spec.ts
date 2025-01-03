import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallandepositreportComponent } from './challandepositreport.component';

describe('ChallandepositreportComponent', () => {
  let component: ChallandepositreportComponent;
  let fixture: ComponentFixture<ChallandepositreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallandepositreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallandepositreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
