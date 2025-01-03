import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditdigitallocksComponent } from './addeditdigitallocks.component';

describe('AddeditdigitallocksComponent', () => {
  let component: AddeditdigitallocksComponent;
  let fixture: ComponentFixture<AddeditdigitallocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditdigitallocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditdigitallocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
