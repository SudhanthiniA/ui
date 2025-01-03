import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedutyComponent } from './advanceduty.component';

describe('AdvancedutyComponent', () => {
  let component: AdvancedutyComponent;
  let fixture: ComponentFixture<AdvancedutyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedutyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
