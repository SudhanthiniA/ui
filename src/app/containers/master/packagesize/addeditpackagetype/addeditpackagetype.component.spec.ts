import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditpackagetypeComponent } from './addeditpackagetype.component';

describe('AddeditpackagetypeComponent', () => {
  let component: AddeditpackagetypeComponent;
  let fixture: ComponentFixture<AddeditpackagetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditpackagetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditpackagetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
