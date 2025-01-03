import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedutyregComponent } from './advancedutyreg.component';

describe('AdvancedutyregComponent', () => {
  let component: AdvancedutyregComponent;
  let fixture: ComponentFixture<AdvancedutyregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedutyregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedutyregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
