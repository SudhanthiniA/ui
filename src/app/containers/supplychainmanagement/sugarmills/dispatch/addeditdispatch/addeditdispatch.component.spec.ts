import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditdispatchComponent } from './addeditdispatch.component';

describe('AddeditdispatchComponent', () => {
  let component: AddeditdispatchComponent;
  let fixture: ComponentFixture<AddeditdispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditdispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditdispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
