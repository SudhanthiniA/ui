import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentpendancyreportComponent } from './indentpendancyreport.component';

describe('IndentpendancyreportComponent', () => {
  let component: IndentpendancyreportComponent;
  let fixture: ComponentFixture<IndentpendancyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentpendancyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentpendancyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
