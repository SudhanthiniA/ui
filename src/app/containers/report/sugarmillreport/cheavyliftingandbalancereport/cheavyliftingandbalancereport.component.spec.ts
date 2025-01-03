import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheavyliftingandbalancereportComponent } from './cheavyliftingandbalancereport.component';

describe('CheavyliftingandbalancereportComponent', () => {
  let component: CheavyliftingandbalancereportComponent;
  let fixture: ComponentFixture<CheavyliftingandbalancereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheavyliftingandbalancereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheavyliftingandbalancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
