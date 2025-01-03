import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditbottlingComponent } from './addeditbottling.component';

describe('AddeditbottlingComponent', () => {
  let component: AddeditbottlingComponent;
  let fixture: ComponentFixture<AddeditbottlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditbottlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditbottlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
