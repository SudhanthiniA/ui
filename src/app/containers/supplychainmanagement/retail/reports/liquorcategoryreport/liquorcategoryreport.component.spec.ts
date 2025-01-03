import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquorcategoryreportComponent } from './liquorcategoryreport.component';

describe('LiquorcategoryreportComponent', () => {
  let component: LiquorcategoryreportComponent;
  let fixture: ComponentFixture<LiquorcategoryreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquorcategoryreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquorcategoryreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
