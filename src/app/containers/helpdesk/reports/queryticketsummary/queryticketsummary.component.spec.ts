import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryticketsummaryComponent } from './queryticketsummary.component';

describe('QueryticketsummaryComponent', () => {
  let component: QueryticketsummaryComponent;
  let fixture: ComponentFixture<QueryticketsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryticketsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryticketsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
