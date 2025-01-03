import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinedistributionComponent } from './winedistribution.component';

describe('WinedistributionComponent', () => {
  let component: WinedistributionComponent;
  let fixture: ComponentFixture<WinedistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinedistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinedistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
