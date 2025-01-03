import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolloveraddpageComponent } from './rolloveraddpage.component';

describe('RolloveraddpageComponent', () => {
  let component: RolloveraddpageComponent;
  let fixture: ComponentFixture<RolloveraddpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolloveraddpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolloveraddpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
