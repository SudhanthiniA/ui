import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfoundandduplicatesComponent } from './viewfoundandduplicates.component';

describe('ViewfoundandduplicatesComponent', () => {
  let component: ViewfoundandduplicatesComponent;
  let fixture: ComponentFixture<ViewfoundandduplicatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfoundandduplicatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfoundandduplicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
