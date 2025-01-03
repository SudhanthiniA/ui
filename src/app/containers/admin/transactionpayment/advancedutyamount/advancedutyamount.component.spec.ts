import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedutyamountComponent } from './advancedutyamount.component';

describe('AdvancedutyamountComponent', () => {
  let component: AdvancedutyamountComponent;
  let fixture: ComponentFixture<AdvancedutyamountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedutyamountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedutyamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
