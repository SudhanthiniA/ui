import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditbottlingplanComponent } from './addeditbottlingplan.component';

describe('AddeditbottlingplanComponent', () => {
  let component: AddeditbottlingplanComponent;
  let fixture: ComponentFixture<AddeditbottlingplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditbottlingplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditbottlingplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
