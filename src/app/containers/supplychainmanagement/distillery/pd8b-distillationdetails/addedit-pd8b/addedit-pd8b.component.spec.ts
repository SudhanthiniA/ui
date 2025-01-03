import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditPd8bComponent } from './addedit-pd8b.component';

describe('AddeditPd8bComponent', () => {
  let component: AddeditPd8bComponent;
  let fixture: ComponentFixture<AddeditPd8bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditPd8bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditPd8bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
