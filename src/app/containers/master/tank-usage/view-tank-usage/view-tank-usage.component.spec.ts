import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTankUsageComponent } from './view-tank-usage.component';

describe('ViewTankUsageComponent', () => {
  let component: ViewTankUsageComponent;
  let fixture: ComponentFixture<ViewTankUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTankUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTankUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
