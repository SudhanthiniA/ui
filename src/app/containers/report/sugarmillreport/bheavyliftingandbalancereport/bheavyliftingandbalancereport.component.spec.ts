import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BheavyliftingandbalancereportComponent } from './bheavyliftingandbalancereport.component';

describe('BheavyliftingandbalancereportComponent', () => {
  let component: BheavyliftingandbalancereportComponent;
  let fixture: ComponentFixture<BheavyliftingandbalancereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BheavyliftingandbalancereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BheavyliftingandbalancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
