import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockactivityComponent } from './viewstockactivity.component';

describe('ViewstockactivityComponent', () => {
  let component: ViewstockactivityComponent;
  let fixture: ComponentFixture<ViewstockactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
