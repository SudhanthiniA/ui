import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwfoundandduplicatesComponent } from './mwfoundandduplicates.component';

describe('MwfoundandduplicatesComponent', () => {
  let component: MwfoundandduplicatesComponent;
  let fixture: ComponentFixture<MwfoundandduplicatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwfoundandduplicatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwfoundandduplicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
