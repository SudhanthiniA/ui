import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrrequestsummaryComponent } from './ivrrequestsummary.component';

describe('IvrrequestsummaryComponent', () => {
  let component: IvrrequestsummaryComponent;
  let fixture: ComponentFixture<IvrrequestsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvrrequestsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvrrequestsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
