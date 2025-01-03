import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwfoundandduplicatesComponent } from './viewmwfoundandduplicates.component';

describe('ViewmwfoundandduplicatesComponent', () => {
  let component: ViewmwfoundandduplicatesComponent;
  let fixture: ComponentFixture<ViewmwfoundandduplicatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwfoundandduplicatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwfoundandduplicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
