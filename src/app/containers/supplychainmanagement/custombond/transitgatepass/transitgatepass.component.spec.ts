import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitgatepassComponent } from './transitgatepass.component';

describe('TransitgatepassComponent', () => {
  let component: TransitgatepassComponent;
  let fixture: ComponentFixture<TransitgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
