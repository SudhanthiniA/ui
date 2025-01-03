import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryreportComponent } from './queryreport.component';

describe('QueryreportComponent', () => {
  let component: QueryreportComponent;
  let fixture: ComponentFixture<QueryreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
