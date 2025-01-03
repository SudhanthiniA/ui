import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentuserreportComponent } from './departmentuserreport.component';

describe('DepartmentuserreportComponent', () => {
  let component: DepartmentuserreportComponent;
  let fixture: ComponentFixture<DepartmentuserreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentuserreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentuserreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
