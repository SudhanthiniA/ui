import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdispatchdistrictComponent } from './viewdispatchdistrict.component';

describe('ViewdispatchdistrictComponent', () => {
  let component: ViewdispatchdistrictComponent;
  let fixture: ComponentFixture<ViewdispatchdistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdispatchdistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdispatchdistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
