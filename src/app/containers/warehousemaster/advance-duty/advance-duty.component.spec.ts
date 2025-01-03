import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceDutyComponent } from './advance-duty.component';

describe('AdvanceDutyComponent', () => {
  let component: AdvanceDutyComponent;
  let fixture: ComponentFixture<AdvanceDutyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceDutyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
