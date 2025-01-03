import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditLocationComponent } from './addedit-location.component';

describe('AddeditLocationComponent', () => {
  let component: AddeditLocationComponent;
  let fixture: ComponentFixture<AddeditLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
